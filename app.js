const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=140bb9a7b88454a8f6731d21343d15f7&query=37.8267,-122.4233';

// requests takes 2 arguments
// json: true --> we would like a response to be in json
request({ url: url, json: true }, (error, response) => {
    const weather_description = response.body.current.weather_descriptions[0];
    const temperature = response.body.current.temperature;
    const feelslike = response.body.current.feelslike;
    // console.log(response.body.current)
    console.log(weather_description + ". It is currently " + temperature + " degrees celcius and feels like " + feelslike + " degrees out.");
})

