import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import IconButton from './IconButton';

const HeaderWrapper = styled.header`
  color: palevioletred;
  border: 3px solid grey;
  padding: 5px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Ice Queen</h1>
      <IconButton icon={faUser}/>
    </HeaderWrapper>
  )
}

export default Header;