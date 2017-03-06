/*
@title WebSite to PNG
@input
{
  "content-type" : "text/uri-list",
  "example" : "http://google.com"
}
@output
{
  "content-type" : "image/png"
}
@pragma editor
*/

var phantom = require('phantom');

module.exports = function(req, res, next) {
  phantom
    .create()
    .tap((ph) => {
      return ph
              .createPage()
              .then((page) => {
                return page
                        .property('viewportSize', { width: 1920, height: 1080 })
                        .then(() => page);
              })
              .then((page) => {
                var url = req.body;
                if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
                    url = "http://" + url;
                }
                
                console.log('opening page:', url);
                return page
                        .open(url)
                        .then((status) => {
                          console.log('opened:', req.body);
                          console.log('rendering png...');

                          return page.renderBase64('PNG');
                        })
                        .then((base64) => {
                          console.log('rendered png');

                          res.end(new Buffer(base64, 'base64'), 'binary');
                        });
              });
    })
    .finally(() => {
      return ph.kill().then(() => ph.exit());
    });
};