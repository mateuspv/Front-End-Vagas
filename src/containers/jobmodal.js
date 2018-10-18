import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { HIDE_JOB_MODAL } from "../state/actions";

import Modal from "../components/modal";
import HR from "../components/hr";
import Button from "../components/button";
import IconGithub from "../assets/icon-github.svg";

const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: sticky;
  bottom: -50px;
  width: 100%;
  left: 0;
  background: var(--white);
  padding-bottom: 50px;
`;

const Text = styled.div`
  line-height: 1.6;

  h1,
  h2,
  h3,
  h4 {
    font-size: var(--f-big);

    :first-chield {
      margin-top: 0;
    }
  }

  img {
    display: block;
    text-align: center;
    margin: 0 auto;
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

  h1,
  h2,
  h3,
  h4,
  p,
  img {
    margin-bottom: 25px;
  }

  a {
    text-decoration: underline;
    :hover {
      color: var(--blue);
      text-decoration: underline;
    }
  }
`;

const JobModal = ({
  modal: { isVisible, card = { title: "", bodyRendered: "", html_url: "" } },
  onCloseClick
}) => {
  return (
    <Modal isVisible={isVisible} onCloseClick={onCloseClick}>
      <Text>
        <div dangerouslySetInnerHTML={{ __html: card.bodyRendered }} />
      </Text>

      <Footer>
        <HR />
        <a href={card.html_url} target="_blank" rel="noopener noreferrer">
          <Button text="Ver" icon={IconGithub} alt="Github" />
        </a>
      </Footer>
    </Modal>
  );
};

const mapStateToProps = ({ modal }, ownProps) => ({
  modal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCloseClick() {
    HIDE_JOB_MODAL();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobModal);
