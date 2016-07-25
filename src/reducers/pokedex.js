import { REFRESH, ADD_POKEMON, DELETE_POKEMON, UPDATE_POKEMON, SET_FOCUSED_POKEMON, RESET_FOCUSED_POKEMON } from '../actions/PokeActions';

const init = {
	focusedPokemon : {},
	fresh: false,
	pokemons: []
}

export default function counter(state = init, action) {
  switch (action.type) {
    case SET_FOCUSED_POKEMON:
       return { ...state, focusedPokemon: action.pokemon };
    case RESET_FOCUSED_POKEMON:
       return { ...state, focusedPokemon: {} };
    case ADD_POKEMON:
    case DELETE_POKEMON:
    case UPDATE_POKEMON:
       return { ...state, fresh: false };
    case REFRESH:
       return { ...state, fresh: true, pokemons: action.pokemons };
    default:
      return state;
  }
}
