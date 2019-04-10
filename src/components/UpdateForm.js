import React, { Component } from 'react'
import todoService from '../lib/todo-service.js';
import './componentsCSS/updateForm.css';

export default class CreateForm extends Component {

  state = {
    updateTitle: '',
    updateBody: ''
  }

  componentDidMount() {
    this.setState({
      updateTitle: this.props.title,
      updateBody: this.props.body
    });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  updateTodo = async (e) => {
    e.preventDefault();
    try {
      await todoService.updateTodo(this.props.id, this.state.updateTitle, this.state.updateBody);
    } catch (error) {
      console.log(error);
    }

    const hasUpdated = true;
    this.props.getTodos(e, hasUpdated);
  }

  render() {
    return (
      <div className="update-form">
        <form onSubmit={this.updateTodo}>
          <button onClick={this.props.close} className="close-button">X</button>
          <h3>Update</h3>
          <input type="text" name="updateTitle" placeholder="Title" value={this.state.updateTitle} onChange={this.onChange}></input>
          <input type="text" name="updateBody" placeholder="Text" value={this.state.updateBody} onChange={this.onChange}></input>
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}
