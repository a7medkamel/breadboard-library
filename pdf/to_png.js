/*
@title PDF to PNG
@input
{
  "content-type" : "text/uri-list",
  "example" : "http://www.cs.columbia.edu/~sedwards/classes/2012/4840/apple.pdf"
}
@output
{
  "content-type" : "image/png"
}
@pragma editor
*/

var gm = require('graphicsmagick-stream');
var request = require('request');

module.exports = function(req, res, next) {
  var convert = gm({
    pool: 1,             // how many graphicsmagick processes to use 
    format: 'png',       // format to convert to 
    scale: {
      width: 600,        // scale input to this width 
      height: 600,       // scale input this height 
      type: 'contain'    // scale type (either contain/cover/fixed) 
    },
    // crop: {
    //   width: 200,        // crop input to this width 
    //   height: 200,       // crop input this height 
    //   x: 0,              // crop using this x offset 
    //   y: 0               // crop using this y offset 
    // },
    page: [1,5],         // only render page 1 to 5 (for pdfs) 
                         // set to a single number if you only want to render one page 
                         // or omit if you want all pages 
    rotate: 'auto',      // auto rotate image based on exif data 
                         // or use rotate:degrees 
    density: 300,        // set the image density. useful when converting pdf to images 
    split: false,        // when converting pdfs into images it is possible to split 
                         // into multiple pages. If set to true the resulting file will 
                         // be a tar containing all the images. 
    tar: false           // stream a tar containing the image. This is forced to `true` 
                         // if split is set to `true` 
  })
   
  request(req.body)
    .pipe(convert({
      // override any of the above options here 
    }))
    .pipe(res)
};
