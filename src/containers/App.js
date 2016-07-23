import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import { Link } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PokeTable from '../components/PokeTable';
import {Button, Icon, Modal, Input, Row} from 'react-materialize';


const daPokemons =
[
        {
            id: '0',
            name: 'Pikachu',
            typeOne: 'Electric',
            typeTwo: ''
        },
        {
            id: '1',
            name: 'Bulbasaur',
            typeOne: 'Grass',
            typeTwo: 'Poison'
        },
        {
            id: '2',
            name: 'Charmander',
            typeOne: 'Fire',
            typeTwo: ''
        },
        {
            id: '0',
            name: 'Pikachu',
            typeOne: 'Electric',
            typeTwo: ''
        },
        {
            id: '1',
            name: 'Bulbasaur',
            typeOne: 'Grass',
            typeTwo: 'Poison'
        },
        {
            id: '2',
            name: 'Charmander',
            typeOne: 'Fire',
            typeTwo: ''
        },
        {
            id: '0',
            name: 'Pikachu',
            typeOne: 'Electric',
            typeTwo: ''
        },
        {
            id: '1',
            name: 'Bulbasaur',
            typeOne: 'Grass',
            typeTwo: 'Poison'
        },
        {
            id: '2',
            name: 'Charmander',
            typeOne: 'Fire',
            typeTwo: ''
        }
]

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export default class App extends Component {
    render() {
        // we can use ES6's object destructuring to effectively 'unpack' our props
        const { counter, actions, children} = this.props;
        return (
            <div>
                <Header/>
                <PokeTable pokemons={daPokemons}/>
            </div>
        );
    }
}

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
    return {

    };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CounterActions, dispatch)
    };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
