/*
@title XML to JSON
@input
{
  "content-type" : "application/xml",
  "example" : "<note>\n  <to>Tove</to>\n  <from>Jani</from>\n  <heading>Reminder</heading>\n  <body>Don't forget me this weekend!</body>\n</note>"
}
@output
{
  "content-type" : "application/json"
}
@pragma editor replace
*/

var xml2js = require('xml2js');

module.exports = function(req, res, next) {
  var parser = new xml2js.Parser();

  parser.parseString(req.body, function(err, result) {
    res.json(result);
  });
};