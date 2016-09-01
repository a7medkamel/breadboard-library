/*
@title CSV to JSON array
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

var parse = require('csv-parse');

module.exports = function(req, res, next) {
  var arr = [];

  req
    .pipe(parse())
    .on('data', function(row){
      arr.push(row);
    })
    .on('end', function(){
      res.send(arr);
    })
    ;
};