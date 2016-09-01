/*
@title ASCII spark line from array
@input
{
  "content-type" : "application/json",
  "example" : "[ 1, 5, 5, 13, 3, 2, 0, 2, 34, 22, 15, 12, 8, 4, 3, 6, 18, -5, -15, -11, -23, -3, 10, 18, 23, 17, 4, 5, 6, 3, 12, 10, 7, -4, 17, 30, 27, 25, 23, 16, 14, 12, 8, 6, 4, 2 ]"
}
@output
{
  "content-type" : "text/plain"
}
@pragma editor append
*/

var clark = require('clark');

module.exports = function(req, res, next) {
  res.send(clark(req.body));
};