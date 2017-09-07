import React from 'react';
import PropTypes from 'prop-types';

import Header from './header.js'
import Console from './console.js'
import Network from './network.js'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentState: 'cons'
        }
        this.components = {
            cons: <Console></Console>,
            net: <Network></Network>,
            timeline: <p>timeline</p>,
            ele: <p>ele</p>,
            store: <p>store</p>,
        }

    }

    handleChange(event, value){
        this.setState({currentState: value})
    }

    render(){
        const currentState = this.state.currentState
        const components = this.components
        return (
            <div className="main" >
                <Header handleChange = {(event,value) => this.handleChange(event,value)}></Header>
                <div className="contentContainer">
                    {this.components[this.state.currentState]}
                </div>            
            </div>
            )
    }
}



export default Main
