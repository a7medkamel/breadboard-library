/*
@title bcrypt hash
@input
{
  "content-type" : "text/plain",
  "example" : "Hello World!"
}
@output
{
  "content-type" : "application/json"
}
@pragma editor append
*/

var bcrypt = require('bcrypt');

module.exports = function(req, res, next) {
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body, salt, function(err, hash) {
          res.send({
              salt : salt
            , hash : hash
          });
      });
  });
};