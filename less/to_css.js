/*
@title Less to CSS
@input
{
  "content-type" : "text/less",
  "example" : ".myclass { color : red; .child { padding : 15px; } }"
}
@output
{
  "content-type" : "text/css"
}
@pragma editor replace
*/

var less = require('less');

module.exports = function(req, res, next) {
  less.render(req.body, { compress : false }, function (err, output) {
    res.send(output.css);
  });
};