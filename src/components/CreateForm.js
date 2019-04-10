import React, { Component } from 'react'
import todoService from '../lib/todo-service.js';
import './componentsCSS/createForm.css';

export default class CreateForm extends Component {

  state = {
    title: '',
    body: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  createTodo = async (e) => {
    e.preventDefault();
    try {
      await todoService.createTodo(this.state.title, this.state.body);
    } catch (error) {
      console.log(error);
    }
    this.props.getTodos();
  }

  render() {
    return (
      <div className="create-form">
        <form onSubmit={this.createTodo}>
          <div>
            <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.onChange}></input>
            <input type="text" name="body" placeholder="Text" value={this.state.body} onChange={this.onChange}></input>
          </div>
          <input type="submit" value="Create" className="create-button"></input>
        </form>
      </div>
    )
  }
}
