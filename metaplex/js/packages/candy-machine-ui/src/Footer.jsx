import React from 'react'
import styled from 'styled-components';

// Footer to do !
const FooterDiv = styled.div`
  display: flex;
  font-style: italic;
  justify-content: space-between;
  color: red;
  width: 1200px;

  margin: 0 auto;
  margin-top: 3rem;
  & > img {
    width: 100px;
    height: 50px;
  }
`;

function Footer() {
  return (
    <FooterDiv>Footer</FooterDiv>
  )
}

export default Footer