/*
@title Multiline string to ES5 Singleline
@input
{
  "content-type" : "text/plain",
  "example" : "line 1\nline2\nline3\n"
}
@output
{
  "content-type" : "text/plain"
}
@pragma editor replace
*/

module.exports = function(req, res, next) {
  var ret = req.body.replace(/\n/g, '\\n');

  res.send(ret);
};
