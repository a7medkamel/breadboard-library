/*
@title ES5 AST Parser
@input
{
  "content-type" : "application/javascript",
  "example" : "square = function(x) { return x * x; };"
}
@output
{
  "content-type" : "application/json"
}
@pragma editor
*/

var esprima     = require('esprima');

module.exports = function(req, res, next) {
  var ast = esprima.parse(req.body, { range : true, raw : true });

  res.send(ast);
};