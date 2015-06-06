var querystring = require('querystring');
var request = require('./lib/request');

function Dota2WebApi (options) {
  this.url = options.apiUrl || 'http://api.steampowered.com/';
  this.apiKey = options.apiKey;
}

Dota2WebApi.prototype._request = function (method, params) {
  var url = this.url + method + '?key=' + this.apiKey + '&' + querystring.stringify(params);
  return request({
    url: url,
    json: true
  });
};

Dota2WebApi.prototype.getRarities = function (language) {
  var method = 'IEconDOTA2_570/GetRarities/v1';
  return this._request(method, {
    language: language
  });
};

Dota2WebApi.prototype.getPlayerItems = function (steamID) {
  var method = 'IEconItems_570/GetPlayerItems/v1';
  return this._request(method, {
    steamid: steamID
  });
};

Dota2WebApi.prototype.getHeroes = function (language, itemizedonly) {
  var method = 'IEconDOTA2_570/GetHeroes/v1/';
  return this._request(method, {
    itemizedonly: itemizedonly
  });
};

Dota2WebApi.prototype.getSchemaUrl = function () {
  var method = 'IEconItems_570/GetSchemaURL/v1';
  return this._request(method);
};

module.exports = Dota2WebApi;