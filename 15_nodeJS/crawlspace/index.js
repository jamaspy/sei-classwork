const Crawler = require('crawler')

const isCrawlable = function (url) {
    if (!url) return false;
    if (!url.startsWith('http')) return false;

    let terrible = false
    const terribleSites = ["archive.is", 'google.com', 'microsoft.com', "facebook.com", "github.com", ".dev", "tools.ietf.org"]

    terribleSites.forEach((awfulSite) => {
        if (url.includes(awfulSite)) {
            terrible = true;
        }
    })

    if(terrible) {
        return false
    }

    return true
}


const c = new Crawler({
    rateLimit: 1000,
    callback: function (err, res, done) {
  if(typeof res.$ === 'function'){
    console.log( res.$('title').text() ); 
    console.log( res.request.uri.href + '/n')

    const $links = res.$('a');
    $links.each(function (){
        const href = res.$( this ).attr( 'href' )
        if (isCrawlable (href)){
            c.queue( href );    
        }
    })
  }
        

        done();
    }
});


c.queue( process.argv[2] || 'https://lobste.rs' )