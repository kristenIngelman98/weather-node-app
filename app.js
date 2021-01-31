const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=140bb9a7b88454a8f6731d21343d15f7&query=37.8267,-122.4233';

// requests takes 2 arguments
// json: true --> we would like a response to be in json
request({ url: url, json: true }, (error, response) => {
    const weather_description = response.body.current.weather_descriptions[0];
    const temperature = response.body.current.temperature;
    const feelslike = response.body.current.feelslike;
    console.log(weather_description + ". It is currently " + temperature + " degrees celcius and feels like " + feelslike + " degrees out.");
})

// Goal: Print the lat/long for Washington

// 1. Fire off a new request to the URL explore in the browser
// 2. Have the request module parse it as JSON
// 3. Print both the lat and long to the terminal

const url_mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=2&access_token=pk.eyJ1Ijoia3Jpc3Rlbi1pbmdlbG1hbiIsImEiOiJja2tsbHY2djIxY2YxMm9wN3Q3NHNlMXNlIn0.MNajsWvAkI0TWRbdzJptNA';

request({ url: url_mapbox, json: true }, (error, response) => {
    const data = response.body.features[0].center[0];
    const state = response.body.features[0].place_name;
    const lat = response.body.features[0].center[0];
    const long = response.body.features[0].center[1];
  
    console.log(state + " is located at the coordinates: " + lat +  " ," + long);
})