

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
 // Do not commit this code son
 `mongodb+srv://jamaspy:69Albionstreet!@cluster0-0rqvm.mongodb.net/test?retryWrites=true`,
 { useNewUrlParser: true }
);

const PORT = process.env.port || 3000;
const server = express();

// Middleware
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

routes(server);
server.listen(PORT);

server.use((req, res) => {
 res.status(404).send({url: `Fail ${req.originalUrl} not found`});
});

console.log(`Server started on http://localhost:${PORT}/`);