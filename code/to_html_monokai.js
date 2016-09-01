/*
Syntax highlight a block of code using highlight
- Styled with monokai sublime theme
@title Syntax highlighted HTML for code, monokai style
@input
{
  "content-type" : "text/plain",
  "example" : "square = function(x) { return x * x; };"
}
@output
{
  "content-type" : "text/html"
}
@pragma editor append
*/

var _     = require('underscore')
  , hljs  = require('highlight.js')
  , tmpl  =
`<html>
  <head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/styles/monokai_sublime.min.css' />
  </head>
  <body>
    <pre class='hljs'><%= html %></pre>
  </body>
</html>`;

module.exports = function(req, res, next) {
  var fct   = _.template(tmpl)
    , html  = hljs.highlightAuto(req.body).value
    ;

  res.send(fct({ html : html }));
};