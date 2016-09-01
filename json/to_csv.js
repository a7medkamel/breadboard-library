/*
@title JSON to CSV
@input
{
  "content-type" : "application/json",
  "example" : "[{ "name" : "troubles", "age" : 5 }, { "name" : "kahlua", "age" : 10 }]"
}
@output
{
  "content-type" : "text/csv"
}
@pragma editor replace
*/

var json2csv = require('json2csv');
var _ = require('underscore');

module.exports = function(req, res, next) {
  var fields = _.keys(_.first(req.body));
  json2csv({data: req.body, fields : fields}, function(err, csv) {
    res.send(csv);
  });
};