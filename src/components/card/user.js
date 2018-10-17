import React from 'react'
import styled from 'styled-components';

const User = styled.a`
  display: flex;
  align-items: center;
  transition: 0.8s all;

  :hover {
    color: var(--blue);
    text-decoration: underline;
  }

  :hover img {
    box-shadow: var(--highlight-circle);
  }
`

const UserPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`

const UserName = styled.p`
  font-size: var(--f-regular);
  font-style: italic;
  margin-left: 10px;
`

export default ({ user }) => {
  return <User href={user.html_url} target="_blank" rel="noopener noreferrer">
    <UserPhoto src={user.avatar_url} alt={user.login} />
    <UserName className="card__user__name">{user.login}</UserName>
  </User>
}