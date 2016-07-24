const axios = require('axios');

const xhr = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {'Content-Type' : 'application/json'}
})

console.log('hello');
axios.get('/getPokemons').then( response => console.log(response.data), error => console.log(error));