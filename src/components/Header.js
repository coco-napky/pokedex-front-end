import React from 'react';
import pokedexImage from '../images/pokedex_logo.png';

let headerStyle = {
    textAlign: 'center',
    backgroundColor: '#e6441e'
}

export const Header = () => (
	<div style={headerStyle}>
	    <div>
	        <img src={pokedexImage}/>
	    </div>
	</div>
)

export default Header;