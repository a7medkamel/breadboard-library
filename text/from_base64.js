/*
@title From Base64
@input
{
  "content-type" : "text/plain",
  "type" : "buffer",
  "example" : "SSBhbSBwbGFpbiB0ZXh0IQ=="
}
@output
{
  "content-type" : "text/plain"
}
@pragma editor replace
*/

var Buffer = require('buffer');

module.exports = function(req, res, next) {
  var buf = Buffer.transcode(req.body, 'base64', 'utf8')

  res.send(buf);
};