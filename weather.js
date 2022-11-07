let weather = {
    apiKey: "9ea48479550bf115f3e9a6d54f3ec7ed",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { humidity, temp_min, temp_max } = data.main;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp_min").innerText = temp_min + "°F";
        document.querySelector(".temp_max").innerText = temp_max + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document
    .querySelector(".search button")
    .addEventListener("click", function () {
        weather.search();
    });
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Hood River")