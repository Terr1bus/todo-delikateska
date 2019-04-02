import React, { useState } from 'react';
import styled from 'styled-components';

const InputBlock = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  flex-basis: 75%;
  outline: none;
  padding: 5px;
  border-radius: 5px;
`;

export default function({ addTodo }) {
  const [input, setInput] = useState('');
  const [id, setId] = useState(localStorage.getItem('todos')
    ? localStorage.getItem('todos').length
    : 0
  );

  const onEnterKeyDown = keycode => {
    if (keycode !== 13) {
      return;
    }

    addTodo(id, input);
    setId(id + 1);
    setInput('');
  };

  return (
    <InputBlock>
      <Input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => onEnterKeyDown(e.keyCode)}
        placeholder='Enter todo text'
      />
    </InputBlock>
  );
};