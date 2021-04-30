import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  border: 3px solid grey;
  text-align: center;
  width: 100%;
  height: 5vh;
  font-size: 1.3em
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Copyright &copy; 2021 Ice Queen Pvt. Ltd.
    </FooterWrapper>
  )
}

export default Footer;