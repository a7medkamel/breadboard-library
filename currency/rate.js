/*
@title Exchange rate
@input
{
  "content-type" : "application/json",
  "example" : ["CAD", "USD", 100 ]
}
@output
{
  "content-type" : "application/json"
}
@pragma editor append
*/

var request = require('request');

module.exports = function(req, res, next) {
  var arr = req.body;

  var options = {
    url : 'http://api.fixer.io/latest',
    json : true,
    qs : { base : arr[0], symbols : arr[1] }
  };

  request(options, function(error, response, body){
    console.log(arr);
    var rate = body.rates[arr[1]];
    if (arr[2]) {
      rate = rate * arr[2];
    }
    res.json(rate);
  });
};