/*
@title Compile ES6 to ES5
@input
{
  "content-type" : "application/javascript",
  "example" : "var a3 = a.map( s => s.length );"
}
@output
{
  "content-type" : "application/javascript"
}
@pragma editor replace
*/

var babel = require('babel-core');

module.exports = function(req, res, next) {
  res.send(babel.transform(req.body, { "presets": ["es2015"] }).code);
};