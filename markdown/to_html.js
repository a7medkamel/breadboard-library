/*
@title Markdown to HTML
@input
{
  "content-type" : "text/x-markdown",
  "example" : "#header\n#- item 1\n- item 2"
}
@output
{
  "content-type" : "text/html"
}
@pragma editor replace
*/

var marked = require('marked');

module.exports = function(req, res, next) {
  res.send(marked(req.body));
};