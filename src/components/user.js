import React from "react";
import styled from "styled-components";

const User = styled.a`
  display: grid;
  grid-template-columns: 30px auto;
  grid-column-gap: 15px;
  align-items: center;
  transition: 0.8s all;

  :hover {
    color: var(--blue);
    text-decoration: underline;
  }

  :hover img {
    box-shadow: var(--highlight-circle);
  }
`;

const UserPhoto = styled.img`
  border-radius: 100%;
`;

const UserName = styled.p`
  font-size: var(--f-regular);
  font-style: italic;
`;

export default ({ user }) => {
  return (
    <User href={user.html_url} target="_blank" rel="noopener noreferrer">
      <UserPhoto src={user.avatar_url} alt={user.login} />
      <UserName className="card__user__name">{user.login}</UserName>
    </User>
  );
};
