/*
@title Text to Speech
@input
{
  "content-type" : "text/plain",
  "example" : "Hello from Task Mill!"
}
@output
{
  "content-type" : "audio/mpeg"
}
@pragma editor
*/

var tts     = require('node-tts-api')
  , Promise = require('bluebird')
  , request = require('request')
  ;

module.exports = function(req, res, next) {
  Promise
    .promisify(tts.getSpeech)(req.body)
    .then(function(url){
      return request.get(url);
    })
    .then(function(response){
      response.pipe(res);
    })
    .catch(function(err){
      next(err);
    })
    ;
};