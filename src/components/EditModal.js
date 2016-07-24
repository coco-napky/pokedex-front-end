import React, { Component, PropTypes } from 'react';
import {Input} from 'react-materialize';

class EditModal extends Component{
	constructor(props){
		super(props);
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
			                        <Input label="Name" defaultValue=""/>
			                    </div>
			                </div>
							<div className="row">
			                    <div className="input-field col s6">
			                        <Input label="Primary Type" defaultValue=""/>
			                    </div>
			                    <div className="input-field col s6">
			                        <Input label="Secondary Type" defaultValue=""/>
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
	}
}

export default EditModal;