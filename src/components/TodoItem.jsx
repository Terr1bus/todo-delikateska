import React from 'react';
import styled from 'styled-components';

const TodoItem = styled.li`
  position: relative;
  padding: 18px 40px;
  color: ${props => props.completed ? '#ccc' : '#000'}
  border-radius: 3px;
  transition: .3s ease;

  &:hover {
    background: #eee;
    box-shadow: 0 0 4px;
  };

  &::after {
    content: "";
    position: absolute;
    right: 10px;
    top: 18px;
    width: 18px;
    height: 18px;
    background: center / 100% no-repeat ${props => props.completed
      ? 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDM3LjAxOSA3NC45OEMzODguNjY3IDI2LjYyOSAzMjQuMzggMCAyNTYgMCAxODcuNjE5IDAgMTIzLjMzMSAyNi42MjkgNzQuOTggNzQuOTggMjYuNjI4IDEyMy4zMzIgMCAxODcuNjIgMCAyNTZzMjYuNjI4IDEzMi42NjcgNzQuOTggMTgxLjAxOUMxMjMuMzMyIDQ4NS4zNzEgMTg3LjYxOSA1MTIgMjU2IDUxMmM2OC4zOCAwIDEzMi42NjctMjYuNjI5IDE4MS4wMTktNzQuOTgxQzQ4NS4zNzEgMzg4LjY2NyA1MTIgMzI0LjM4IDUxMiAyNTZzLTI2LjYyOS0xMzIuNjY3LTc0Ljk4MS0xODEuMDJ6TTI1NiA0ODJDMTMxLjM4MyA0ODIgMzAgMzgwLjYxNyAzMCAyNTZTMTMxLjM4MyAzMCAyNTYgMzBzMjI2IDEwMS4zODMgMjI2IDIyNi0xMDEuMzgzIDIyNi0yMjYgMjI2eiIvPjxwYXRoIGQ9Ik0zNzguMzA1IDE3My44NTljLTUuODU3LTUuODU2LTE1LjM1NS01Ljg1Ni0yMS4yMTIuMDAxTDIyNC42MzQgMzA2LjMxOWwtNjkuNzI3LTY5LjcyN2MtNS44NTctNS44NTctMTUuMzU1LTUuODU3LTIxLjIxMyAwLTUuODU4IDUuODU3LTUuODU4IDE1LjM1NSAwIDIxLjIxM2w4MC4zMzMgODAuMzMzYTE0Ljk1MyAxNC45NTMgMCAwIDAgMTAuNjA2IDQuMzkzYzMuODM4IDAgNy42NzgtMS40NjUgMTAuNjA2LTQuMzkzbDE0My4wNjYtMTQzLjA2NmM1Ljg1OC01Ljg1NyA1Ljg1OC0xNS4zNTUgMC0yMS4yMTN6Ii8+PC9zdmc+)'
      : 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NzEuNjEyIiBoZWlnaHQ9IjQ3MS42MTIiPjxwYXRoIGQ9Ik02OC45ODcgNDAyLjYyNGM5MS45OCA5MS45ODMgMjQxLjY1MiA5MS45ODMgMzMzLjYzNiAwIDkxLjk4My05MS45NzcgOTEuOTgzLTI0MS42NTggMC0zMzMuNjM5cy0yNDEuNjU1LTkxLjk4LTMzMy42MzYgMC05MS45OCAyNDEuNjU3IDAgMzMzLjYzOXpNODcuMjkgODcuMjc2YzgxLjg5OS04MS44OTYgMjE1LjE1Mi04MS44OTYgMjk3LjA1MiAwIDgxLjg4MiA4MS44OTQgODEuODgyIDIxNS4xNTQgMCAyOTcuMDU1LTgxLjg5OSA4MS44ODctMjE1LjE2NCA4MS44ODctMjk3LjA1MiAwLTgxLjg5Ni04MS45LTgxLjg5Ni0yMTUuMTYxIDAtMjk3LjA1NXoiLz48L3N2Zz4=)'
    };
  }
`;

const Cross = styled.span`
  position: absolute;
  left: 7px;
  top: 7px;
  font-size: 33px;
  cursor: pointer;
  transition: .3s ease;

  &:hover {
    color: red;
  }
`;

const TodoText = styled.span`
  cursor: pointer;
  position: relative;
`;

export default function({ id, text, completed,removeTodo, toggleTodo }) {
  return (
    <TodoItem completed={completed}>
      <Cross onClick={() => removeTodo(id)}>&times;</Cross>
      <TodoText onClick={() => toggleTodo(id)}>{ text }</TodoText>
    </TodoItem>
  )
};