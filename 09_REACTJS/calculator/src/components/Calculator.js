import React, { Component } from 'react';
class Calculator extends Component {

    constructor(){
        super();
        this.state = {
            a: 0,
            b: 0
        };
        this._updateA = this._updateA.bind(this)
        this._updateB = this._updateB.bind(this)
    }

    _updateA(event){
        const a = Number(event.target.value);
        this.setState({ a: a});
    }
    _updateB(event){
        const b = Number(event.target.value);
        this.setState({ b: b});
    }


    render() {
        const { a, b } = this.state;
        return (
            <div className = "text-box">
                <h1>Not So Crappy Reactive Calculator</h1>
                <input className = "input" type="number" onChange={ this._updateA } value = {this.state.a || ""}/>
                <input className = "input" type="number" onChange={ this._updateB } value = {this.state.b || ""}/>
                <h1>Results:</h1>
                <h3>{a} + {b} = {a + b} </h3>
                <h3>{a} - {b} = {a - b} </h3>
                <h3>{a} * {b} = {a * b} </h3>
                <h3>{a} / {b} = {a / b} </h3>
            </div>
        )
    }
}

export default Calculator;