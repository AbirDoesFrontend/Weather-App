const API_KEY = `6a123bd572d8e64643e6a78ad30f4ec3`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTempData(data));
    
}

const searchBtn = document.getElementById('search_btn');
const searchFeild = document.getElementById('search_field');

searchBtn.addEventListener('click' , () => {
    const searchText = searchFeild.value;
    setDataById('city' , searchText);
    loadTemperature(searchText);
    searchFeild.value = '';
})


const displayTempData = data => {
    setDataById('temp_data' , data.main.temp);
    setDataById('condition' , data.weather[0].main);
}

const setDataById = (id , text) => {
    const tempData = document.getElementById(id);
    tempData.innerText = text;
}








