/*
@title uuid v4
@output
{
  "content-type" : "text/plain"
}
@pragma editor insert
*/

var uuid = require('node-uuid');

module.exports = function(req, res, next){
  res.send(uuid.v4());
};
