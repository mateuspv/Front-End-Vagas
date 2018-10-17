import styled from 'styled-components';
import React from 'react'
import IconClose from './close.svg';

const Dialog = styled.dialog`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  :not([open]) {
    display: none;
  }

  .container {
    flex-grow: 1;
  }
`;

const Overlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: var(--bg);
`;

const Wrapper = styled.div`
  padding: 50px;
  position: relative;
  z-index: 2;
  background-color: var(--white)
`

const CloseButton = styled.button`
  position: absolute;
  right: 50px;
  top: 25px;
  width: 32px;
  height: 32px;
`

const Modal = (props) => (
  <Dialog className="modal" open={props.isVisible}>
    <Overlayer />
    <div className="container">
      <Wrapper>
        <CloseButton onClick={props.onCloseClick}>
          <img src={IconClose} alt="close" />
        </CloseButton>
        <div>
          {props.children}
        </div>
      </Wrapper>
    </div>
  </Dialog>
)

export default Modal;