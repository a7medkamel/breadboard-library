/*
@title Compile Coffee-Script
@input
{
  "content-type" : "text/plain",
  "example" : "square = (x) -> x * x"
}
@output
{
  "content-type" : "application/javascript"
}
@pragma editor replace
*/

var coffee = require('coffee-script');

module.exports = function(req, res, next) {
  res.send(coffee.compile(req.body));
};