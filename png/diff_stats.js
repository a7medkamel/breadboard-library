/*
@title Calculate stats for diff between two PNG images
@input
{
  "content-type" : "text/uri-list",
  "example" : "http://humblesoftware.github.io/js-imagediff/images/2_transparentPixels_a.png\nhttp://humblesoftware.github.io/js-imagediff/images/2_transparentPixels_b.png"
}
@output
{
  "content-type" : "application/json"
}
@pragma editor
*/

var resemble  = require('node-resemble-js');
var request   = require('request');
var _         = require('underscore');

module.exports = function(req, res, next) {
  var urls = req.body.split('\n');

  request({ url : urls[0], encoding: null }, (err, r, a) => {
    request({ url : urls[1], encoding: null }, (err, r, b) => {
      resemble(a).compareTo(b).onComplete(function(data){
        res.send(data);
      });
    });  
  });
};