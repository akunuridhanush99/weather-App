function showLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'block';
}

function hideLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'none';
}

function DataHide() {
    const data = document.getElementById('headContainer');
    data.style.display = 'none';
}

function DataEnable() {
    const data = document.getElementById('headContainer');
    data.style.display = 'block';
}

const options = {
    method: 'GET',
    headers: {
        'X-rapidAPI-Key': 'd8ca4129b1msh3b6012d0d6f7031p16602bjsnc13b6f76cbcc',
        'X-rapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    DataEnable();
    hideLoadingSpinner();
    cityname.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            feels_like.innerHTML = response.feels_like
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.eror(err));

}

submit.addEventListener("click", (e) => {
    DataHide();
    showLoadingSpinner();
    e.preventDefault();
    setTimeout(() => {
        getWeather(city.value)
    }, 1500)
})

getWeather("Hyderabad")
