/*
@title HTML to PDF
@input
{
  "content-type" : "text/html",
  "example" : "<h1 class='bold'>Hello</h1>"
}
@output
{
  "content-type" : "application/pdf"
}
@pragma editor
*/

var pdf = require('html-pdf');

module.exports = function(req, res, next) {
  pdf.create(req.body).toStream(function(err, stream){
    stream.pipe(res);
  });
};