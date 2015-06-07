var Dota2WebApi = require('../');

var api = new Dota2WebApi({
  apiKey: process.env.APIKEY
});

api.getHeroes().then(function (heroes) {
  console.log(heroes);
});
