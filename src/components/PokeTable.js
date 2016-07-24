import React, { Component } from 'react';
import {PokeRow} from './PokeRow';
import CreateModal from './CreateModal';
import EditModal from './EditModal';

const paddingLeft = {
	paddingLeft: "2rem"
}

const addButtonStyle = {
	position: 'fixed',
	top: '1rem',
	right: '1rem'
}

const tableStyle= {
	maxHeight: '80%',
    overflow: 'scroll'
}

const mapPokemon = pokemon => (
	<PokeRow {...pokemon}
			 key={pokemon.id}
		     typeTwo={pokemon.typeTwo == '' ? 'N/A' : pokemon.typeTwo}
		     modalEdit="modal-edit"/>
)

class PokeTable extends Component {
	constructor(props){
		super(props);
		this.props.getPokemons();
	}

	render(){

		const {fresh, refresh, resetFocusedPokemon} = this.props;

		return (
			<div style={tableStyle}>
				<table className="striped">
				    <thead>
				        <tr>
				            <th data-field="id" style={paddingLeft}>ID</th>
				            <th data-field="name">Name</th>
				            <th data-field="typeOne">Primary</th>
				            <th data-field="typeTwo">Secondary</th>
				            <th data-field="actualizar">Update</th>
				            <th data-field="borrar">Delete</th>
				        </tr>
					</thead>
				    <tbody>
				    	{this.props.pokemons.map(
				    		pokemon => mapPokemon(
				    		{ ...pokemon,
				    		  setFocusedPokemon: this.props.setFocusedPokemon,
				    		  resetFocusedPokemon: this.props.resetFocusedPokemon
				    		})
				    	)}
				    </tbody>
				</table>
				<a className="btn-floating btn-large waves-effect waves-light modal-trigger green"
				   onClick={ n => openCreateModal()}
				   style={addButtonStyle}>
					<i className="material-icons">add</i>
				</a>
				<CreateModal addPokemon={this.props.addPokemon}/>
				<EditModal focusedPokemon={this.props.focusedPokemon}
				 resetFocusedPokemon={this.props.resetFocusedPokemon}/>
			</div>
		)
	}
}

const openCreateModal = () => {
	$('#modal-create').openModal();
}

export default PokeTable;
