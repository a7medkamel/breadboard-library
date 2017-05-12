/*
@title From Base64
@input
{
  "content-type" : "text/plain",
  "example" : "SSBhbSBwbGFpbiB0ZXh0IQ=="
}
@output
{
  "content-type" : "text/plain"
}
@pragma editor replace
*/

module.exports = function(req, res, next) {
  var buf = Buffer.from(req.body, 'base64').toString('utf8');

  res.send(buf);
};