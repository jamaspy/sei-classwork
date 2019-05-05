import React, { Component } from 'react';

class HelloUser extends Component {
    render() {
        console.log(this.props);
        
        return (
            <h2>Hello { this.props.name || "Mystery USer" } </h2>
        )
    }
};

export default HelloUser