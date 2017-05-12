/*
@title To Base64
@input
{
  "content-type" : "text/plain",
  "example" : "I am plain text!"
}
@output
{
  "content-type" : "text/plain"
}
@pragma editor replace
*/

module.exports = function(req, res, next) {
  var buf = Buffer.from(req.body, 'utf8').toString('base64');

  res.send(buf);
};
