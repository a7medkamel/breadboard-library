/*
@title Tidy HTML
@input
{
  "content-type" : "text/html",
  "example" : "<h1    class='bold'>Hello</    h1>"
}
@output
{
  "content-type" : "text/plain"
}
@pragma editor replace
*/

var beautify = require('js-beautify').html;

module.exports = function(req, res, next) {
  var nice = beautify(req.body, {
      indent_size   : 2
  });

  res.send(nice);
};