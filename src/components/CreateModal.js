import React, { Component } from 'react';

class CreateModal extends Component{
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
		this.props.addPokemon({
			name: this.name,
			typeOne: this.primary,
			typeTwo: this.secondary
		})
	}

	render(){
		return(
			<div id="modal-create" className="modal" style={{maxHeight: '80%'}}>
			    <div className="modal-content">
			        <h4>Create Pokemon</h4>
			            <form>
			                <div className="row">
			                    <div className="input-field col s12">
			                        <input id="tipo" type="text" className="validate" onChange={this.handleNameChange} />
			                        <label htmlFor="tipo">Name</label>
			                    </div>
			                </div>
							<div className="row">
			                    <div className="input-field col s12">
			                        <input id="tipo" type="text" className="validate" onChange={this.handlePrimaryChange} />
			                        <label htmlFor="tipo">Primary Type</label>
			                    </div>
			                </div>
			                <div className="row">
			                    <div className="input-field col s12">
			                        <input id="tipo" type="text" className="validate" onChange={this.handleSecondyChange} />
			                        <label htmlFor="tipo">Secondary Type</label>
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

export default CreateModal;
