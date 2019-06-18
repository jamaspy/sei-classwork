import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import {withTracker} from 'meteor/react-meteor-data';
import {Tasks} from '../api/tasks';

class App extends Component {
  constructor(){
    super();
    this.state = {
      hideCompleted: false,
    };
  }
  
  
    toggleHideCompleted(){
        this.setState({
          hideCompleted: !this.state.hideCompleted
        })    
    }

  handleSubmit(event){
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    Tasks.insert({
      text: text,
      createdAt: new Date()
    });
    ReactDOM.findDOMNode(this.refs.textInput).value=" ";
  }


  renderTasks(){
    let filteredTasks = this.props.tasks;
    if(this.state.hideCompleted){
      filteredTasks = filteredTasks.filter(task => !task.complete);
    }
    return filteredTasks.map((task) => (
      <Task key={task._id} task={task} />
    ))
  }

  render(){
    return(
      <div className="container">
        <header>
          <h1>To Do List ({this.props.incompleteCount}) </h1>
          <label  className="hide-completed">
            <input type="checkbox" 
                   readOnly 
                   checked = {this.state.hideCompleted} 
                   onClick={this.toggleHideCompleted.bind(this)}/>
          </label>
          <form onSubmit={this.handleSubmit.bind(this)} className="new-task">
            <input type="text" ref="textInput" placeholder="Type here to add new tasks"/>
          </form>
        </header>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    )
  }
}

export default withTracker(() => {
  return{
    tasks: Tasks.find({}, {sort:{ createdAt: -1 }}).fetch(), incompleteCount: Tasks.find({complete: {$ne: true}}).count
  }
})(App);