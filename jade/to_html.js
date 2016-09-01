/*
@title Compile Jade to HTML
@input
{
  "content-type" : "text/jade",
  "example" : "div\n  address\n  i\n  strong"
}
@output
{
  "content-type" : "text/html"
}
@pragma editor replace
*/

var jade = require('jade');
var beautify = require('js-beautify').html;

module.exports = function(req, res, next) {
  var tmpl = jade.compile(req.body);
  var html = tmpl();
  var nice = beautify(html, {
      indent_size   : 2
  });

  res.send(nice);
};