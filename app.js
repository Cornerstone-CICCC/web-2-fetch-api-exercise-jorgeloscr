
fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        const current = data.current;
        const temperature = current.temperature_2m;
        const windSpeed = current.wind_speed_10m;
        const timezone = data.timezone;
        const isDay = current.is_day === 1 ? "Day" : "Night";
        const time = new Date().toLocaleString('en-US', { timeZone: timezone });

       
        document.getElementById('temperature').innerText = `${temperature} °C`;
        document.getElementById('wind-speed').innerText = `${windSpeed} m/s`;
        document.getElementById('timezone').innerText = timezone;
        document.getElementById('time').innerText = time;
        document.getElementById('is-day').innerText = isDay;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
