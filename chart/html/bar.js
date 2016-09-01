/*
@title Bar Chart
@input
{
  "content-type" : "application/json",
  "example" : "[ 1, 5, 5, 13, 3, 2, 0, 2, 34, 22, 15, 12, 8, 4, 3, 6, 18, -5, -15, -11, -23, -3, 10, 18, 23, 17, 4, 5, 6, 3, 12, 10, 7, -4, 17, 30, 27, 25, 23, 16, 14, 12, 8, 6, 4, 2 ]"
}
@output
{
  "content-type" : "text/html"
}
@pragma editor
*/

var _     = require('underscore')
  , tmpl  =
`<html>
  <head>
    <script src='https://raw.githubusercontent.com/HumbleSoftware/Flotr2/master/flotr2.min.js'></script>
    <script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
    <script>
      $(function(){
        Flotr.draw($('.chart')[0], [<%= data %>],
          {
            bars : {
              show : true
            }
          }
        );
      });
    </script>
  </head>
  <body><div class='chart' style='height: 100%; width 100%;' /></div>
</html>`;

module.exports = function(req, res, next) {
  var fct   = _.template(tmpl)
    , data  = req.body
    ;

  var sample = _.first(data);
  // if not array of x, y; then generate sequencial x values
  if (!_.isUndefined(sample) && !_.isArray(sample)) {
    var x = 0;
    data = _.map(data, function(y){
      return [x++, y];
    });
  }

  res.send(fct({ data : JSON.stringify(data) }));
};