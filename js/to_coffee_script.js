/*
@title Convert ES5 to Coffee-Script
@input
{
  "content-type" : "application/javascript"
}
@output
{
  "content-type" : "text/plain"
}
@pragma editor replace
*/

var js2coffee = require('js2coffee');

module.exports = function(req, res, next) {
  res.send(js2coffee.build(req.body).code);
};