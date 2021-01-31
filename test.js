const request = require('request');

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/title/auto-complete',
  qs: {q: 'harry'},
  json: true,
  headers: {
    'x-rapidapi-key': 'bb32f4d8b9mshab5b217da0c2450p184152jsn3d6248b05431',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});