import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  border: 3px solid grey;
  padding: 5px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Copyright &copy; 2021 Ice Queen Pvt. Ltd.
    </FooterWrapper>
  )
}

export default Footer;