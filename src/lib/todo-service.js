import React, { Component } from 'react';
import axios from 'axios';

class TodoService{

  constructor(){
    this.todos = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true,
    })
  }

  getAllTodos(){
    return this.todos.get('/todos')
    .then(({ data }) => data);
  }

  createTodo(title, body){
    return this.todos.post('/todos', {title, body})
    .then(({ data }) => data);
  }

  deleteTodo(id){
    return this.todos.delete(`/todos/${id}`)
    .then(({ data }) => data);
  }
  
  updateTodo(id, title, body){
    return this.todos.put(`/todos/${id}`, {title, body})
    .then(({ data }) => data);
  }

}

const todoService = new TodoService();
export default todoService;
