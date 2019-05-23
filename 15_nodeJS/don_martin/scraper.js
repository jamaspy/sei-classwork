const axios = require('axios');
const $ = require('cheerio');
const fs = require('fs');

const sourceURL = 'https://www.madcoversite.com/dmd-alphabetical.html'


axios( sourceURL ).then( (response) => {
    const html =  response.data;

    const $rows = $('table table tr:nth-child(n+2)', html);

    const entries = []

    $rows.each(function () {
        $cells = $('td', this);
        const entry = {
            sound: $cells.eq(0).text(),
            description: $cells.eq(1).text(),
            source: $cells.eq(2).text(),
            article: $cells.eq(3).text(),
        }
        entries.push( entry );
    });
    fs.writeFile('./martin.json', JSON.stringify(entries, null, 4), () => {
        console.log(`martin.json saved (${entries.length}} entries)`);
    })
});