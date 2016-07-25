import axios from 'axios';
import qs from 'querystring';

const xhr = axios.create({
  baseURL: 'https:localhost:3000',
  timeout: 2000,
  headers: {'Content-Type' : "application/x-www-form-urlencoded"}
})

export const SET_FOCUSED_POKEMON   = 'SET_FOCUSED_POKEMON';
export const RESET_FOCUSED_POKEMON = 'RESET_FOCUSED_POKEMON';
export const ADD_POKEMON           = 'ADD_POKEMON';
export const UPDATE_POKEMON        = 'UPDATE_POKEMON';
export const DELETE_POKEMON        = 'DELETE_POKEMON';
export const REFRESH               = 'REFRESH';

export function setFocusedPokemon(pokemon) {
  return {
    type: SET_FOCUSED_POKEMON,
    pokemon
  };
}

export function resetFocusedPokemon() {
  return {
    type: RESET_FOCUSED_POKEMON
  };
}

export function pokemonCRUD(pokemon, type) {
  return {
    type,
    pokemon,
  };
}


export function deletePokemon(pokemon) {
  console.log('Action : Delete Pokemon', pokemon);
  return dispatch => {
    axios.post('/delete', qs.stringify(pokemon)).then( response => {
        if(response.data.status)
            dispatch(pokemonCRUD(pokemon, DELETE_POKEMON));
    });
  };
}

export function updatePokemon(pokemon) {
  console.log('Action : Update Pokemon', pokemon);
  return dispatch => {
    axios.post('/update', qs.stringify(pokemon)).then( response => {
        if(response.data.status)
            dispatch(pokemonCRUD(pokemon, UPDATE_POKEMON));
    });
  };
}

export function postPokemon(pokemon) {
  console.log('Action : Post Pokemon', pokemon);
  return dispatch => {
    axios.post('/create', qs.stringify(pokemon)).then( response => {
        if(response.data.status)
            dispatch(pokemonCRUD(pokemon, ADD_POKEMON));
    });
  };
}

export function getPokemons() {
  return dispatch => {
    axios.get('/getPokemons').then( response => {
      dispatch(refresh(response.data.pokemons.map(mapPokemon)));
    });
  };
}

const mapPokemon = pokemon => {
  return {
    id: pokemon.Id,
    name: pokemon.Name,
    typeOne: pokemon.Type1,
    typeTwo: pokemon.Type2
  }
}

export function refresh(pokemons) {
  return {
    type: REFRESH,
    pokemons
  };
}
