const API_KEY = `6a123bd572d8e64643e6a78ad30f4ec3`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTempData(data));
    
}

const displayTempData = data => {
    const tempData = document.getElementById('temp_data');
    tempData.innerText = data.main.temp;
}

loadTemperature('dhaka');