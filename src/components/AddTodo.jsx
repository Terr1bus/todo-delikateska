import React, { useState } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, .5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBlock = styled.div`
  flex-basis: 75%;
  max-width: 1400px;
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

export default function({ addTodo, closeModal }) {
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

  const onModalWrapperClick = nodeName => {
    if (nodeName === 'INPUT') {
      return;
    }

    closeModal()
  }

  return (
    <ModalWrapper onClick={e => onModalWrapperClick(e.target.nodeName)}>
      <InputBlock>
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => onEnterKeyDown(e.keyCode)}
          placeholder='Enter todo text'
        />
      </InputBlock>
    </ModalWrapper>
  );
};