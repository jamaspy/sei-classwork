import React, { Component } from 'react';
import axios from 'axios'

const SERVER_URL = "http://localhost:3000/secrets.json"; //Change this to Heroku URL once deployed

class Secrets extends Component {
    constructor() {
        super();
        this.state = {
            secrets: [],
        };
        this.saveSecret = this.saveSecret.bind(this);

        //request secrets from the server and make those secrets the new state 
        const fetchSecrets = () => {
            axios.get(SERVER_URL).then((results) => {
                this.setState({ secrets: results.data })
                setTimeout(fetchSecrets, 4000)
            });
        };
        fetchSecrets()
    }
    //PARENT has to have the function that they can pass to the child. "Here is a phone, call me when you are ready to be picked up"
    saveSecret(content) {
        axios.post(SERVER_URL, { content: content }).then((result) => {
            this.setState({ secrets: [...this.state.secrets, result.data] })
        })
    }

    render() {
        return (
            <div>
                <h1>TELL US ALLL YOUR SECRETS</h1>
                <SecretForm onSubmit={this.saveSecret} />
                <Gallery secrets={this.state.secrets} />
            </div>
        )
    }
};


class SecretForm extends Component {
    constructor() {
        super();
        this.state = {
            content: ""
        };
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(event) {
        this.setState({ content: event.target.value });
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.content);
        this.setState({ content: "" });
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <textarea name="" id="" cols="30" rows="10" value={this.state.content} onChange={this._handleChange}></textarea>
                <input type="submit" value="Tell Me A Secret" />
            </form>
        )
    }
}

class Gallery extends Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.secrets.map((s) => <li key={s.id}>{s.content}</li>)}
                </ol>
            </div>
        )
    }
}


export default Secrets;