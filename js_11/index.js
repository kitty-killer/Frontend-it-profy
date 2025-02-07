const body = document.querySelector('body');
const chouses = document.querySelector('.images-chouses');

if (localStorage.getItem('bgImage')) {
    setBackgroundPicture(localStorage.getItem('bgImage'));
} else {
    setBackgroundPicture("./images/cat.jpg");
}

chouses.addEventListener('click', (event) => {
    if(event.target.matches("img")){
        chouses.querySelectorAll('img').forEach(element => {
            element.classList.remove('img-chosen');
        });
        
        setBackgroundPicture(event.target.getAttribute('src'));
        event.target.classList.toggle('img-chosen');
    } 
});

function setBackgroundPicture(item){
    body.style.backgroundImage = `url(${item})`;
    localStorage.setItem('bgImage', item);
}
