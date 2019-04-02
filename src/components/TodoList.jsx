import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodoList = styled.ul`
  list-style: none;
  margin: 0 0 50px;
  padding: 0;
`;

export default function({ todos, removeTodo, toggleTodo }) {

  return (
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      ))}
    </TodoList>
  )
};