const express = require('express');
const bodyParser = require('body-parser');


// require('dotenv').config();
const knex = require('./db/knex');

function albums() {
    return knex('albums')
}
const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.post('/', function(req, res) {

    Albums().insert({
        artist: req.body.artist,
        name: req.body.name,
        genre: req.body.genre,
        stars: req.body.stars,
        explicit: req.body.explicit
    }, 'id').then(function(result) {
        res.json(result); // sends response with the JSON data. here it is 'result'
    });
});
app.get('/', function(req, res) {
    // console.log(data);
    knex('albums').select().then(function(data) {
        res.json(data);
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
