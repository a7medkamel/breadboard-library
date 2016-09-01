/*
@title CSV to JSON
@input
{
  "content-type" : "text/csv",
  "type" : "stream",
  "example" : "Year,Make,Model\n1997,Ford,E350\n2000,Mercury,Cougar"
}
@output
{
  "content-type" : "application/json"
}
@pragma editor replace
*/

var parse = require('csv-parse')
  , _     = require('lodash')
  ;

module.exports = function(req, res, next) {
  var arr = [];

  req
    .pipe(parse())
    .on('data', (row) => arr.push(row))
    .on('end', () => {
      var head = _.first(arr);
      var rows = _.tail(arr);
      
      var ret = [];
      _.each(rows, (row) => {
        var obj = {};
        _.each(head, (key, i) => obj[key] = row[i]);
        ret.push(obj);
      });
      res.send(ret);
    })
    ;
};