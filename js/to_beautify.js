/*
@title Beautify JavaScript
@input
{
  "content-type" : "application/javascript",
  "example" : "var x = 13;\n      var y = 20;"
}
@output
{
  "content-type" : "application/javascript"
}
@pragma editor replace
*/

var beautify = require('js-beautify').js_beautify;

module.exports = function(req, res, next) {
  var nice = beautify(req.body, {
      indent_size   : 2
  });

  res.send(nice);
};