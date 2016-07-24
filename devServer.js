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
        id: '0',
        name: 'Pikachu',
        typeOne: 'Electric',
        typeTwo: ''
    },
    {
        id: '1',
        name: 'Bulbasaur',
        typeOne: 'Grass',
        typeTwo: 'Poison'
    },
    {
        id: '2',
        name: 'Charmander',
        typeOne: 'Fire',
        typeTwo: ''
    },
    {
        id: '3',
        name: 'Pikachu',
        typeOne: 'Electric',
        typeTwo: ''
    },
    {
        id: '4',
        name: 'Bulbasaur',
        typeOne: 'Grass',
        typeTwo: 'Poison'
    },
    {
        id: '5',
        name: 'Charmander',
        typeOne: 'Fire',
        typeTwo: ''
    },
    {
        id: '6',
        name: 'Pikachu',
        typeOne: 'Electric',
        typeTwo: ''
    },
    {
        id: '7',
        name: 'Bulbasaur',
        typeOne: 'Grass',
        typeTwo: 'Poison'
    },
    {
        id: '8',
        name: 'Charmander',
        typeOne: 'Fire',
        typeTwo: ''
    }
]
    res.send({pokemons});
});

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
  console.log('Running in ' + process.env.NODE_ENV + " mode");
});
