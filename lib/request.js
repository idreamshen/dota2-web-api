var request = require('request');

module.exports = function (options) {
  return new Promise(function (resolve, reject) {
    request(options, function (err, response, body) {
      if (err) {
        reject(new Error(err));
        return;
      }
      if (!response) {
        reject(new Error('response is null'));
        return;
      }
      if (response.statusCode != 200) {
        reject(new Error('response code: ' + response.statusCode));
        return;
      }
      if (response.statusCode === 200) {
        resolve(body.result);
        return;
      }
    });
  });
};