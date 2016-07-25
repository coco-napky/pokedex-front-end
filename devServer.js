const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.set('view engine', 'ejs');
app.use(express.static('public'));
if(process.env.NODE_ENV !== 'production'){
	app.use(require('webpack-dev-middleware')(compiler, {
	  noInfo: true,
	  publicPath: config.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(compiler));
}

app.get('/', (req, res) => {
  	res.render('index', {production: process.env.NODE_ENV === 'production'});
});

app.get('/getPokemons', (req, res) => {

  const pokemons =
[
    {
        Id: '0',
        Name: 'Pikachu',
        Type1: 'Electric',
        Type2: ''
    },
    {
        Id: '1',
        Name: 'Bulbasaur',
        Type1: 'Grass',
        Type2: 'Poison'
    },
    {
        Id: '2',
        Name: 'Charmander',
        Type1: 'Fire',
        Type2: ''
    }
]
    res.send({pokemons});
});

app.post('/create', (req, res) => {
    console.log('/create log')
    res.send({status: 1, message: "Successful insert"});
});

app.post('/delete', (req, res) => {
    console.log('/delete log')
    res.send({status: 1, message: "Successful delete"});
});

app.post('/update', (req, res) => {
    console.log('/update log')
    res.send({status: 1, message: "Successful update"});
});

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
  console.log('Running in ' + process.env.NODE_ENV + " mode");
});
