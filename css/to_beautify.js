/*
@title Beautify CSS
@input
{
  "content-type" : "text/css",
  "example" : "menu{color:red} navigation{background-color:#333}"
}
@output
{
  "content-type" : "text/css"
}
@pragma editor replace
*/

var css = require('css');

module.exports = function(req, res, next) {
  var ast = css.parse(req.body);
  var output = css.stringify(ast);

  res.send(output);
};