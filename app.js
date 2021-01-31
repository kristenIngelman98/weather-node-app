const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=140bb9a7b88454a8f6731d21343d15f7&query=37.8267,-122.4233';

// requests takes 2 arguments
// json: true --> we would like a response to be in json
request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current)
})

