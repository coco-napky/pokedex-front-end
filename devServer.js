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

app.get('*', (req, res) => {
  	res.render('index', {production: process.env.NODE_ENV === 'production'});
});

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
  console.log('Running in ' + process.env.NODE_ENV + " mode");
});
