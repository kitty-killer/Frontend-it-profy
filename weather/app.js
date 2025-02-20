
fetch('https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric')
    .then(response => response.json())
    .then(data => {
        const currentWeather = data.list[0];
        const cityName = data.city.name;
        const date = new Date();
        const dateTime = `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`;

        document.getElementById('city').textContent = cityName;
        document.getElementById('date-time').textContent = dateTime;
        document.getElementById('temperature').textContent = `${Math.round(currentWeather.main.temp)}°C`;
        document.getElementById('weather-description').textContent = currentWeather.weather[0].description;
        document.getElementById('wind-speed').textContent = `Speed: ${currentWeather.wind.speed} m/s`;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;

        const forecastContainer = document.getElementById('forecast-container');
        for (let i = 0; i < data.list.length; i += 8) { 
            const forecast = data.list[i];
            const forecastItem = document.createElement('div');
            forecastItem.className = 'forecast-item';
            forecastItem.innerHTML = `
                <span>${new Date(forecast.dt * 1000).toLocaleDateString()} ${new Date(forecast.dt * 1000).getHours()}:00</span>
                <span>${Math.round(forecast.main.temp)}°C</span>
            `;
            forecastContainer.appendChild(forecastItem);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });