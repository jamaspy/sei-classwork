const express = require('express');
const ejs = require('ejs');
const _fetch = require('isomorphic-fetch');
const IEX = require('iex-api');

const iex = new IEX.IEXClient(_fetch);

const PORT = 1337;

const server = express();
server.set('view-engine', 'ejs');

server.get('/', (req, res) => {
    res.render('home.ejs')
});

server.get('/info', (req, res) => {
    const symbol = req.param('symbol');
    iex.stockQuote(symbol).then((quote) => {
        res.render('info.ejs', {symbol: symbol, quote: quote})
    })
})

server.listen(PORT, ()=>console.log(`Listen On: http://localhost:${PORT}`))