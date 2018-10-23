import React from "react";
import styled from "styled-components";

import BackgroundPattern from "../assets/flick-pattern.png";
import IconClose from "../assets/icon-close.svg";

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
    animation-duration: 0.8s;
    animation-fill-mode: both;
    animation-name: fadeInUp;
  }
`;

const Overlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url('${BackgroundPattern}');
`;

const Wrapper = styled.div`
  padding: 50px;
  position: relative;
  z-index: 2;
  max-height: 90vh;
  overflow-x: auto;
  background-color: var(--white);
  border-radius: 4px;
`;

const CloseButton = styled.button`
  position: absolute;
  z-index: 9090;
  right: 50px;
  top: 50px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: var(--white);
  box-shadow: var(--shadow);

  :hover,
  :focus,
  :active {
    outline: none;
    box-shadow: var(--highlight-circle);
    transition: 0.8s all;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

const Modal = props => (
  <Dialog className="modal" open={props.isVisible}>
    <Overlayer />

    <CloseButton onClick={props.onCloseClick}>
      <img src={IconClose} alt="close" />
    </CloseButton>

    <div className="container">
      <Wrapper>
        <div>{props.children}</div>
      </Wrapper>
    </div>
  </Dialog>
);

export default Modal;
