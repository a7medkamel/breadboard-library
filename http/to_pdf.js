/*
@title WebSite to PDF
@input
{
  "content-type" : "text/uri-list",
  "example" : "http://google.com"
}
@output
{
  "content-type" : "application/pdf"
}
@pragma editor
*/

var pdf = require('html-pdf');
var request = require('request');

module.exports = function(req, res, next) {
  var url = req.body;
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
    url = "http://" + url;
  }

  request.get(url, function(err, r, body){
    pdf.create(body).toStream(function(err, stream){
      stream.pipe(res);
    });
  });
};
