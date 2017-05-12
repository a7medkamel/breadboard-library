/*
@title Multiline string to ES5
@input
{
  "content-type" : "text/plain",
  "example" : "line 1\nline2\nline3\n"
}
@output
{
  "content-type" : "application/javascript"
}
@pragma editor replace
*/

module.exports = function(req, res, next) {
  var buf = Buffer.from(req.body, 'utf8')
    , arr = []
    ;

  for(var i = 0; i < buf.length; i++) {
    var char = buf[i];

    if (char == '\'') {
      char = '\\\'';
    }

    if (char == '\\') {
      char = '\\\\';
    }

    if (char == '\n') {
      char = '\\n';
    }

    arr.push(char);
  }

  res.send('\'' + arr.join('') + '\'');
};
