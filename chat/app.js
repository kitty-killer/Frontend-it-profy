class Message {
    constructor({ id, sender, text, timestamp, editedTimestamp }) {
        this.id = id || Date.now();
        this.sender = sender;
        this.timestamp = timestamp ? new Date(timestamp) : new Date();
        this.text = text;
        this.editedTimestamp = editedTimestamp ? new Date(editedTimestamp) : null;
    }

    getFormattedTime() {
        return this.timestamp.toLocaleTimeString(navigator.language, { hour: "2-digit", minute: "2-digit" });
    }

    getFormattedEditedTime() {
        return this.editedTimestamp
            ? `(изменено: ${this.editedTimestamp.toLocaleTimeString(navigator.language, { hour: "2-digit", minute: "2-digit" })})`
            : "";
    }

    render(currentUser) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${this.sender === currentUser ? "user-message" : "other-message"}`;
        messageDiv.dataset.id = this.id;

        const messageContent = document.createElement("div");
        messageContent.className = "message-content";

        const p = document.createElement("p");
        p.textContent = this.text;

        const timestamp = document.createElement("span");
        timestamp.className = "timestamp";
        timestamp.textContent = this.getFormattedTime();

        messageContent.append(p, timestamp);

        if (this.editedTimestamp) {
            const editTimestamp = document.createElement("span");
            editTimestamp.className = "edit-timestamp";
            editTimestamp.textContent = this.getFormattedEditedTime();
            messageContent.appendChild(editTimestamp);
        }

        messageDiv.appendChild(messageContent);

        if (this.sender === currentUser) {
            const actions = document.createElement("div");
            actions.className = "message-actions";

            const editButton = this.createButton("Изменить", "edit-btn");
            const deleteButton = this.createButton("Удалить", "delete-btn");
            actions.append(editButton, deleteButton);

            messageDiv.appendChild(actions);
        }

        return messageDiv;
    }

    createButton(text, className) {
        const button = document.createElement("button");
        button.textContent = text;
        button.className = className;
        return button;
    }
}

class UserMessage extends Message {
   constructor({ id, sender, text, timestamp, editedTimestamp } = {}) {
        super({ id, sender, text, timestamp, editedTimestamp });
    }

    canEdit(currentUser) {
        return this.sender === currentUser;
    }

    edit(newText) {
        if (newText && newText !== this.text) {
            this.text = newText;
            this.editedTimestamp = new Date();
            return true;
        }
        return false;
    }
}

class SystemMessage extends Message {
    constructor({ id, sender, text, timestamp, editedTimestamp, type } = {}) {
        super({ id, sender, text, timestamp, editedTimestamp });
        this.type = type || "info";
    }

    format() {
        const types = {
            warning: `⚠️ ${this.text}`,
            error: `❌ ${this.text}`,
            info: `ℹ️ ${this.text}`
        };
        return types[this.type] || types.info;
    }

    render() {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message system-message";
        messageDiv.textContent = this.format();
        return messageDiv;
    }
}

class Chat {
    constructor() {
        this.messages = [];
        this.loadMessages();
    }

    loadMessages() {
        try {
            const savedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
            this.messages = savedMessages.map(msg =>
                msg.sender === "system" ? new SystemMessage(msg) : new UserMessage(msg)
            );
        } catch {
            this.showError("Ошибка при загрузке сообщений.");
        }
    }

    saveMessages() {
        try {
            localStorage.setItem("chatMessages", JSON.stringify(this.messages));
        } catch {
            this.showError("Ошибка при сохранении сообщений.");
        }
    }

    addMessage(message) {
        if (message && message.text) {
            this.messages.push(message);
            this.saveMessages();
        } else {
            this.showError("Сообщение должно содержать текст.");
        }
    }

    deleteMessage(id) {
        this.messages = this.messages.filter(msg => msg.id !== id);
        this.saveMessages();
    }

    editMessage(id, newText) {
        const message = this.messages.find(msg => msg.id === id);
        if (message instanceof UserMessage) {
            const isEdited = message.edit(newText);
            if (isEdited) {
                this.saveMessages();
            } else {
                this.showError("Сообщение не изменено.");
            }
        }
    }

    getMessages() {
        return this.messages;
    }

    searchMessages(query) {
        return this.messages.filter(msg => msg.text && msg.text.toLowerCase().includes(query.toLowerCase()));
    }

    showError(message) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.textContent = message;
        document.getElementById("errorContainer").appendChild(errorDiv);

        setTimeout(() => errorDiv.remove(), 3000);
    }
}

class ChatUI {
    constructor(chat) {
        this.chat = chat;
        this.currentUser = "user1";
        this.setupDOMElements();
        this.setupEventListeners();
        this.renderMessages();
        this.updateUserButtons();
    }

    setupDOMElements() {
        this.messagesContainer = document.getElementById("messagesContainer");
        this.messageForm = document.getElementById("messageForm");
        this.messageInput = document.getElementById("messageInput");
        this.searchInput = document.getElementById("searchInput");
    }

    setupEventListeners() {
        this.messageForm.addEventListener("submit", (e) => this.handleSubmit(e));
        this.messagesContainer.addEventListener("click", (e) => this.handleMessageActions(e));
        document.getElementById("switchUser1").addEventListener("click", () => this.switchUser("user1"));
        document.getElementById("switchUser2").addEventListener("click", () => this.switchUser("user2"));
        this.searchInput.addEventListener("input", () => this.handleSearch());
    }

    handleSubmit(e) {
        e.preventDefault();
        const text = this.messageInput.value.trim();
        if (!this.validateMessage(text)) return;

        this.chat.addMessage(new UserMessage({ sender: this.currentUser, text }));
        this.messageInput.value = "";
        this.renderMessages();
    }

    handleMessageActions(e) {
        const messageDiv = e.target.closest("[data-id]");
        if (!messageDiv) return;

        const messageId = parseInt(messageDiv.dataset.id);
        const message = this.chat.getMessages().find(msg => msg.id === messageId);

        if (e.target.classList.contains("delete-btn")) {
            this.chat.deleteMessage(messageId);
            this.chat.addMessage(new SystemMessage({ sender: "system", text: "Сообщение удалено", type: "warning" }));
            this.renderMessages();
        } else if (e.target.classList.contains("edit-btn")) {
            this.startEditingMessage(message, messageDiv);
        }
    }

    startEditingMessage(message, messageDiv) {
        const input = document.createElement("input");
        input.type = "text";
        input.className = "edit-input";
        input.value = message.text;

        const saveButton = this.createButton("Сохранить", "save-edit-btn");
        const cancelButton = this.createButton("Отмена", "cancel-edit-btn");

        const editContainer = document.createElement("div");
        editContainer.className = "edit-container";
        editContainer.append(input, saveButton, cancelButton);
        messageDiv.querySelector('.message-actions').replaceWith(editContainer);

    
        messageDiv.scrollIntoView({ behavior: "smooth", block: "center" });

        saveButton.addEventListener("click", () => {
            const newText = input.value.trim();
            if (this.validateMessage(newText)) {
                this.chat.editMessage(message.id, newText);
                this.renderMessages();
            }
        });

        cancelButton.addEventListener("click", () => {
            this.renderMessages();
        });
    }

    renderMessages(filteredMessages = this.chat.getMessages()) {
        this.messagesContainer.innerHTML = "";

        if (filteredMessages.length === 0) {
            const noResults = document.createElement("div");
            noResults.className = "no-results";
            noResults.textContent = "Сообщений не найдено.";
            this.messagesContainer.appendChild(noResults);
        } else {
            filteredMessages.forEach(msg => {
                const element = msg.render(this.currentUser);
                this.messagesContainer.appendChild(element);
            });
        }

        
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    createButton(text, className) {
        const button = document.createElement("button");
        button.textContent = text;
        button.className = className;
        return button;
    }

    switchUser(newUser) {
        this.currentUser = newUser;
        this.renderMessages();
        this.updateUserButtons();
    }

    updateUserButtons() {
        document.querySelectorAll(".user-button").forEach(button => button.classList.remove("active"));
        document.getElementById(`switchUser${this.currentUser === "user1" ? "1" : "2"}`).classList.add("active");
    }

    handleSearch() {
        const query = this.searchInput.value.trim();
        const filteredMessages = this.chat.searchMessages(query);
        this.renderMessages(filteredMessages);
    }

    validateMessage(text) {
        if (!text || !text.trim()) {
            this.showError("Сообщение не может быть пустым.");
            return false;
        }

        const maxLength = 1000;
        if (text.length > maxLength) {
            this.showError(`Сообщение не должно превышать ${maxLength} символов.`);
            return false;
        }

        return true;
    }

    showError(message) {
        const errorContainer = document.getElementById("errorContainer");
        errorContainer.innerHTML = "";

        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.textContent = message;
        errorContainer.appendChild(errorDiv);

        setTimeout(() => errorDiv.remove(), 3000);
    }
}

const chat = new Chat();
const chatUI = new ChatUI(chat);
