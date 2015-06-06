var Dota2WebApi = require('../');

var api = new Dota2WebApi({
  apiKey: ''
});

api.getHeroes().then(function (heroes) {
  console.log(heroes);
});
