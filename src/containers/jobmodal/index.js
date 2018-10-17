import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Modal from '../../components/modal';
import HR from '../../components/hr';
import Button from '../../components/button';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: sticky;
  bottom: -50px;
  width: 100%;
  left: 0;
  background: var(--white);
  padding-bottom: 50px;
`

const Text = styled.div`
  h2 {
    font-size: var(--f-big);
    margin-top: 25px;
    margin-bottom: 25px;

    :first-chield {
      margin-top: 0
    }
  }

  img {
    margin: 0 auto 25px auto;
  }

  ul {
    margin-top: 15px;
    margin-bottom: 25px;
    list-style: unset;
    list-style-position: inside;
  }

  li {
    margin-top: 10px;
  }
`

const JobModal = ({ modal: { isVisible, card }, onCloseClick }) => {
  return (
    <Modal isVisible={isVisible} onCloseClick={onCloseClick}>

      <Text>
        <div dangerouslySetInnerHTML={{ __html: (card.bodyRendered || '') }}></div>
      </Text>

      <Footer>
        <HR />
        <Button text="Ver" />
      </Footer>
    </Modal>
  );
}

const mapStateToProps = ({ modal }, ownProps) => ({
  modal
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCloseClick() {
    dispatch({ type: 'MODAL_CLOSE' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(JobModal);