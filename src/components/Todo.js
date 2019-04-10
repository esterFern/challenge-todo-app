import React, { Component } from 'react'
import './componentsCSS/todo.css';

export default class Todo extends Component {

  state = {
    done: false
  }

  handleDone=()=> {
    this.setState({ 
      done: !this.state.done 
    });
  }
  render() {
    let doneStyle ={}
    if (this.state.done === true) {
      doneStyle = {
        textDecoration: 'line-through'
      }
    } else {
      doneStyle = {
        textDecoration: ''
      }
    }
    return (
      <>
        <div className="todo">
          <div className="todo-left">
            <h3 onClick={this.handleDone} style={doneStyle}>{this.props.title}</h3>
            <p>{this.props.body}</p>
          </div>
          <div className="todo-right">
            <button onClick={(e) => this.props.handleUpdate(e, this.props.id, this.props.title, this.props.body)}><img src={process.env.PUBLIC_URL + '/images/edit.png'} alt="edit" width="30px" /></button>
            <button onClick={(e) => this.props.handleDelete(e, this.props.id)}><img src={process.env.PUBLIC_URL + '/images/delete.png'} alt="delete" width="30px" /></button>
          </div>
        </div>
      </>
    )
  }
}
