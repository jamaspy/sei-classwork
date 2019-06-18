const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require ('axios')

const server = express();
server.use(express.static('public'));
server.set('view-engine', 'ejs');
const PORT = 1337

server.get('/', (req, res) => {
    console.log("GET /");
    const family = 'James Sam Jen Gaynor David'.split(' ');
    const randomfamily = _(family).sample();
    res.render('home.ejs', {randomfamily: randomfamily});
});

server.get('/about', (req, res)=>{
    console.log("Get /about")
    res.send("Dolores est autem rerum pariatur et consequatur et rerum. Quae architecto quo in placeat dolorem. Est ut ut quisquam nulla quibusdam. Non rem quas in et sint.")
})

server.get('/info', (req, res) => {
    res.json({
        name: "James",
        home: "Stoke",
        number: _.random(40)
    })
})

server.get('/trivia', (req, res) => {
    axios.get("http://numbersapi.com/random/trivia").then((response) => {
        res.render('trivia.ejs', { trivia: response.data});
    })
})

server.listen(PORT, () => console.log(`Now Servering on ${PORT}`));

