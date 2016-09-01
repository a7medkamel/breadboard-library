/*
@title Tidy Markdown
@input
{
  "content-type" : "text/x-markdown",
  "example" : "#header\n#- item 1\n- item 2"
}
@output
{
  "content-type" : "text/x-markdown"
}
@pragma editor replace
*/

var tidy = require('tidy-markdown');

module.exports = function(req, res, next) {
  var md = tidy(req.body);

  res.send(md);
};
