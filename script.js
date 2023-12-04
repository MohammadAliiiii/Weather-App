async function getWeather(cityName) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a2daf54f03msh626f0f8687cc823p19aeefjsn5d5a8907a071',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const rawResult = await response.text();

        // Manually remove quotes around property names
        const result = JSON.parse(rawResult.replace(/"([^"]+)":/g, '"$1":'));

        // Assuming you have HTML elements with IDs like Cloud_pct, Temp, Feels_like, etc.
        document.getElementById("Cloud_pct").innerHTML = result["cloud_pct"];
        document.getElementById("Temp").innerHTML = result["temp"];
        document.getElementById("Feels_like").innerHTML = result["feels_like"];
        document.getElementById("Humidity").innerHTML = result["humidity"];
        document.getElementById("Min_temp").innerHTML = result["min_temp"];
        document.getElementById("Max_temp").innerHTML = result["max_temp"];
        document.getElementById("Wind_speed").innerHTML = result["wind_speed"];
        document.getElementById("Wind_degrees").innerHTML = result["wind_degrees"];
        document.getElementById("Sunrise").innerHTML = result["sunrise"];
        document.getElementById("Sunset").innerHTML = result["sunset"];

    } catch (error) {
        console.log(error);
    }
}
function search() {
    
    document.getElementById("submit").addEventListener('click', (e) => {
        const cityInput = document.getElementById("city");
        const cityName = cityInput.value;
    getWeather(cityName);
    document.getElementById("cityNamee").innerHTML = "Weather for " + cityInput.value;
});
};

// Initial call with a default city
getWeather("Delhi");

document.getElementById("submit").addEventListener('click', () => {
    search();
})