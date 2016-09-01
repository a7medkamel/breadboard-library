/*
@title HTML to Jade
@input
{
  "content-type" : "text/html",
  "example" : "<h1 class='bold'>Hello</h1>"
}
@output
{
  "content-type" : "text/jade"
}
@pragma editor replace
*/

var html2jade = require('html2jade');

module.exports = function(req, res, next) {
  html2jade.convertHtml(req.body, { bodyless : true }, function (err, jade) {
    res.send(jade);
  });
};