import React from 'react';
import Modal from '../../components/modal';
import { connect } from 'react-redux';

const JobModal = ({ modal: { isVisible, card }, onCloseClick }) => {
  return (<Modal isVisible={isVisible} onCloseClick={onCloseClick}>
    <div dangerouslySetInnerHTML={{ __html: (card.title || '') }}></div>
  </Modal>);
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