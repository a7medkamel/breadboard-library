/*
@title Compile Jade to ES5
@input
{
  "content-type" : "text/jade",
  "example" : "div\n  address\n  i\n  strong"
}
@output
{
  "content-type" : "application/javascript"
}
@pragma editor replace
*/


var jade = require('jade');
var beautify = require('js-beautify').js_beautify;

module.exports = function(req, res, next) {
  var tmpl = jade.compileClient(req.body);
  var fct_str = tmpl.toString();
  var nice = beautify(fct_str, { indent_size: 2 });

  res.send(nice);
};