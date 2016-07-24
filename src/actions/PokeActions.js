import axios from 'axios';

const xhr = axios.create({
  baseURL: 'https:localhost:3000',
  timeout: 2000,
  headers: {'Content-Type' : 'application/json'}
})

export const SET_FOCUSED_POKEMON   = 'SET_FOCUSED_POKEMON';
export const RESET_FOCUSED_POKEMON = 'RESET_FOCUSED_POKEMON';
export const ADD_POKEMON           = 'ADD_POKEMON';
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

export function addPokemon(pokemon) {
  return {
    type: ADD_POKEMON,
    pokemon
  };
}

export function getPokemons() {
  return dispatch => {
    axios.get('/getPokemons').then( response => {
      dispatch(refresh(response.data.pokemons));
    });
  };
}

export function refresh(pokemons) {
  return {
    type: REFRESH,
    pokemons
  };
}
