import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = styled.section`
  flex-basis: 20%;
  margin: auto;
  padding: 20px 15px;
  background: #fff;
  box-shadow: 0 0 1px;

`;

export default function() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify([...todos]))
  });
  
  const addTodo = (id, text) => {
    setTodos([...todos, {id, text, completed: false}]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  const toggleTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed};
      };

      return todo;
    }))
  }

  return (
    <App>
      <Header />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      <AddTodo addTodo={addTodo} />
    </App>
  )
};