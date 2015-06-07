var querystring = require('querystring');
var request = require('./lib/request');

function Dota2WebApi (options) {
  this.url = options.apiUrl || 'http://api.steampowered.com/';
  this.apiKey = options.apiKey;
}

Dota2WebApi.prototype._request = function (method, params) {
  var url = this.url + method + '?key=' + this.apiKey + '&' + querystring.stringify(params);
  return request({url: url, json: true});
};

Dota2WebApi.prototype.getRarities = function (options) {
  var method = 'IEconDOTA2_570/GetRarities/v1';
  return this._request(method, options);
};

Dota2WebApi.prototype.getPlayerItems = function (options) {
  var method = 'IEconItems_570/GetPlayerItems/v1';
  return this._request(method, options);
};

Dota2WebApi.prototype.getHeroes = function (options) {
  var method = 'IEconDOTA2_570/GetHeroes/v1/';
  return this._request(method, options);
};

Dota2WebApi.prototype.getSchemaUrl = function (options) {
  var method = 'IEconItems_570/GetSchemaURL/v1';
  return this._request(method, options);
};

Dota2WebApi.prototype.getAssetClassInfo = function (options) {
  var method = 'ISteamEconomy/GetAssetClassInfo/v1/';
  return this._request(method, options);
};

Dota2WebApi.prototype.getAssetPrices = function (options) {
  var method = 'ISteamEconomy/GetAssetPrices/v1/';
  return this._request(method, options);
};

module.exports = Dota2WebApi;