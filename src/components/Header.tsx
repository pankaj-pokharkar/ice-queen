import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

const HeaderWrapper = styled.header`
  color: palevioletred;
  border: 3px solid grey;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Ice Queen</h1>
      <span style={{alignSelf: 'center'}}><FontAwesomeIcon icon={faUser} size="2x" /></span>
    </HeaderWrapper>
  )
}

export default Header;