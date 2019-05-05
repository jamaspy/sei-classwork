import React, { Component } from 'react'

class Clickr extends Component{
    constructor(){
        super();
        // setup initial state
        this.state = { clicks: 0 };
        //Every event that that needs access to "this" shoud be in the constructor
        this._incrementClicks = this._incrementClicks.bind(this);
    }
    _incrementClicks() {
        // this.state.clicks += 1; //Mutation - this wont work
        this.setState({clicks: this.state.clicks + 1})
    }

    render(){
        return(
            <button onClick={ this._incrementClicks }> { this.state.clicks } Clicks So Far </button>
        )
}

}

export default Clickr