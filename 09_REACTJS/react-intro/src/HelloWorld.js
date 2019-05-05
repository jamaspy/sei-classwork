import React, { Component } from 'react';

class HelloWorld extends Component {
    // Every REACT compnonent must have a method called render()
    render(){
        return(
            <h1 className = "hey-there"> Hello World, This is REACT </h1>
        );
    } 
}

export default HelloWorld;