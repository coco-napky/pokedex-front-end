import React, { Component, PropTypes } from 'react';
import {Input} from 'react-materialize';

class EditModal extends Component{
	constructor(props){
		super(props);
		this.handleNameChange    = this.handleNameChange.bind(this);
		this.handlePrimaryChange = this.handlePrimaryChange.bind(this);
		this.handleSecondyChange = this.handleSecondyChange.bind(this);
		this.handleClick         = this.handleClick.bind(this);
	}

	handleNameChange(e){
		this.name = e.target.value;
	}

	handlePrimaryChange(e){
		this.primary = e.target.value;
	}

	handleSecondyChange(e){
		this.secondary = e.target.value;
	}

	handleClick(e){
		this.props.updatePokemon({
			id: this.props.focusedPokemon.id,
			name: this.name,
			typeOne: this.primary,
			typeTwo: this.secondary
		})
	}

	render(){
		return (
			<div id="modal-edit" className="modal" style={{maxHeight: '80%'}}>
			    <div className="modal-content">
			        <h4>Edit Pokemon</h4>
			            <form>
			                <div className="row">
			                    <div className="input-field col s6">
			                    	<Input label="ID" validate defaultValue='' value={this.props.focusedPokemon.id ? this.props.focusedPokemon.id : " "} />
			                    </div>
			                    <div className="input-field col s6">
			                        <Input label="Name" defaultValue="" onChange={this.handleNameChange}/>
			                    </div>
			                </div>
							<div className="row">
			                    <div className="input-field col s6">
			                        <Input label="Primary Type" defaultValue="" onChange={this.handlePrimaryChange}/>
			                    </div>
			                    <div className="input-field col s6">
			                        <Input label="Secondary Type" defaultValue="" onChange={this.handleSecondyChange}/>
			                    </div>
			                </div>
			            </form>
			    </div>
			    <div className="modal-footer">
			        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.handleClick}>Ok</a>
			        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
			    </div>
			</div>
		);
	}
}

export default EditModal;