import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = styled.section`
  position: relative;
  flex-basis: 30%;
  min-width: 300px;
  margin: auto;
  padding: 20px 15px;
  background: #fff;
  box-shadow: 0 0 1px;
`;

const AddTodoButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;

  position: absolute;
  left: calc(50% - 30px);
  bottom: -30px;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #50e3a4;
  color: #46be8b;
  font-size: 33px;
  cursor: pointer;
`;

export default function() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [modalVisible, setModalVisibility] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify([...todos]))
  });
  
  const addTodo = (id, text) => {
    setTodos([...todos, {id, text, completed: false}]);
    setModalVisibility(false);
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
  };

  const addTodoButtonClick = () => {
    setModalVisibility(true);
  }

  const closeModal = () => {
    setModalVisibility(false);
  }

  return (
    <App>
      <Header />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      <AddTodoButton onClick={addTodoButtonClick}>+</AddTodoButton>
      <AddTodo addTodo={addTodo} modalVisible={modalVisible} closeModal={closeModal} />
    </App>
  )
};