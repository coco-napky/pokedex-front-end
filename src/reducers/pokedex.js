import { REFRESH, ADD_POKEMON, SET_FOCUSED_POKEMON, RESET_FOCUSED_POKEMON } from '../actions/PokeActions';

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
       return { ...state, pokemons: [...state.pokemons, action.pokemon] };
    case REFRESH:
       return { ...state, fresh: true, pokemons: action.pokemons };
    default:
      return state;
  }
}
