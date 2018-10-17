import React from 'react'
import styled from 'styled-components';

const User = styled.a`
  display: flex;
  align-items: center;
`

const UserPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`

const UserName = styled.p`
  font-size: 14px;
  font-style: italic;
  margin-left: 5px;
`

export default ({ user }) => {
  return <User href={user.html_url} target="_blank" rel="noopener noreferrer">
    <UserPhoto src={user.avatar_url} alt={user.login} />
    <UserName className="card__user__name">{user.login}</UserName>
  </User>
}