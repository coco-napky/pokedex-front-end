import React from 'react';
import {Button, Icon, Modal, Input, Row} from 'react-materialize';
import {PokeRow} from './PokeRow';

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
	<PokeRow id={pokemon.id} name={pokemon.name}
		     typeOne={pokemon.typeOne}
		     typeTwo={pokemon.typeTwo == '' ? 'N/A' : pokemon.typeTwo}
		     modalEdit="modal-edit"/>
)

export const PokeTable = (props) => (
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
		    	{props.pokemons.map(mapPokemon)}
		    </tbody>
		</table>
		<a className="btn-floating btn-large waves-effect waves-light modal-trigger green"
		   onClick={ n => openCreateModal()}
		   style={addButtonStyle}>
			<i className="material-icons">add</i>
		</a>
		<CreateModal/>
		<EditModal/>
	</div>
)

const openCreateModal = () => {
	$('#modal-create').openModal();
}

const EditModal = (props) => (
		<div id="modal-edit" className="modal" style={{maxHeight: '80%'}}>
		    <div className="modal-content">
		        <h4>Edit Pokemon</h4>
		            <form>
		                <div className="row">
		                    <div className="input-field col s6">
		                        <input id="tipo" type="text" className="validate"/>
		                        <label htmlFor="tipo">ID</label>
		                    </div>
		                    <div className="input-field col s6">
		                        <input id="tipo" type="text" className="validate"/>
		                        <label htmlFor="tipo">Name</label>
		                    </div>
		                </div>
						<div className="row">
		                    <div className="input-field col s6">
		                        <input id="tipo" type="text" className="validate"/>
		                        <label htmlFor="tipo">Primary Type</label>
		                    </div>
		                    <div className="input-field col s6">
		                        <input id="tipo" type="text" className="validate"/>
		                        <label htmlFor="tipo">Secondary Type</label>
		                    </div>
		                </div>
		            </form>
		    </div>
		    <div className="modal-footer">
		        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Ok</a>
		        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
		    </div>
		</div>
);

const CreateModal = (props) => (
	<div id="modal-create" className="modal" style={{maxHeight: '80%'}}>
	    <div className="modal-content">
	        <h4>Create Pokemon</h4>
	            <form>
	                <div className="row">
	                    <div className="input-field col s12">
	                        <input id="tipo" type="text" className="validate"/>
	                        <label htmlFor="tipo">Nombre</label>
	                    </div>
	                </div>
					<div className="row">
	                    <div className="input-field col s12">
	                        <input id="tipo" type="text" className="validate"/>
	                        <label htmlFor="tipo">Primary Type</label>
	                    </div>
	                </div>
	                <div className="row">
	                    <div className="input-field col s12">
	                        <input id="tipo" type="text" className="validate"/>
	                        <label htmlFor="tipo">Secondary Type</label>
	                    </div>
	                </div>
	            </form>
	    </div>
	    <div className="modal-footer">
	        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Ok</a>
	        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
	    </div>
	</div>
);

export default PokeTable;

