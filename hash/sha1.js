/*
@title sha1 hash
@input
{
  "content-type" : "text/plain",
  "example" : "Hello World!"
}
@output
{
  "content-type" : "text/plain"
}
@pragma editor append
*/

var mhash = require('mhash');

module.exports = function(req, res, next) {
  res.send(mhash('sha1', req.body));
};