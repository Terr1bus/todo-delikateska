import React, { useState } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const ModalWrapper = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, .8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in;

  &.visible {
    top: 0;
  }
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

export default function({ addTodo, closeModal, modalVisible }) {
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

    closeModal();
  }

  return (
    <ModalWrapper onClick={e => onModalWrapperClick(e.target.nodeName)} className={classnames({visible: modalVisible})}>
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