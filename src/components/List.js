import React, { Component } from 'react'
import todoService from '../lib/todo-service.js';
import CreateForm from './CreateForm.js';
import UpdateForm from './UpdateForm.js';
import Todo from './Todo.js';
import './componentsCSS/list.css';

export default class List extends Component {

  state = {
    todos: [],
    update: false,
    updateId: '',
    updateTitle: '',
    updateBody: '',
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = async (e, hasUpdated) => {
    try {
      const todos = await todoService.getAllTodos();
      this.setState({ todos });
    } catch (error) {
      console.log(error);
    }

    if (hasUpdated) {
      this.handleClose();
    }

  }

  handleClose = () => {
    this.setState({ update: false });
  }

  handleDelete = async (e, id) => {
    e.preventDefault();
    console.log('DELETE', id);
    try {
      await todoService.deleteTodo(id);
    } catch (error) {
      console.log(error);
    }
    this.getTodos();
  }

  handleUpdate = async (e, id, title, body) => {
    e.preventDefault();
    await this.setState({
      update: true,
      updateId: id,
      updateTitle: title,
      updateBody: body
    });
    console.log('UPDATE', id, title, body);
  }

  renderUpdate() {
    console.log('SHOW FOR UPDATE', this.state.updateTitle);
    if (this.state.update === true) {
      return <UpdateForm
        id={this.state.updateId}
        title={this.state.updateTitle}
        body={this.state.updateBody}
        getTodos={this.getTodos}
        close={this.handleClose}
      />
    } else {
      return
    }

  }

  renderList() {
    if (this.state.todos.length === 0) {
      return <p>The list is empty</p>
    } else {
      return this.state.todos.map((e, index) => {
        return <div key={index + e.title}>
          <Todo
            id={e._id}
            title={e.title}
            body={e.body}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </div>
      })
    }
  }

  render() {
    return (
      <div>
        {this.renderUpdate()}
        <p>Mark as done the tasks clicking over their title</p>
        <div className="list">
          {this.renderList()}
        </div>


        <CreateForm getTodos={this.getTodos} />
      </div>
    )
  }
}
