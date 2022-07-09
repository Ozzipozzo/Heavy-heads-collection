import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink as Hash } from 'react-router-hash-link';
import pop from './assets/tobi.png';
import logo from './assets/logoo.png';

const NavbarContainer = styled.div`
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

const Nav = styled.div`
  a {
    text-decoration: none;
    margin-left: 2rem;
    color: black;
  }
`;

const IndexImageContainer = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  div {
    padding-top: 10rem;
    & > h1 {
      font-size: 48px;
      font-weight: 900;
      line-height: 1.3;
      color: rgb(118, 69, 217);
    }
    & > p {
      font-weight: 5000;
      line-height: 1.3;
      font-size: 20px;
    }
  }
  img {
    height: 70%;
    width: 70%;
    display: block;
  }
`;

const FullApp = () => {
  return (
    <>
      <NavbarContainer>
        <img src={logo} alt="logo" />
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/">buy an Heavy Heads</Link>
          <Link to="/">roadmap</Link>
          <Link to="/">Team</Link>
          <Hash to="#footer" smooth>
            Members
          </Hash>
          <Link to="/mint">Mint</Link>
          <Link to="/twitter">twitter</Link>
          <Link to="/discord">discord</Link>
        </Nav>
      </NavbarContainer>
      <IndexImageContainer>
        <div>
          <h1>Discover an unique NFT collection never done</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum amet
            optio repudiandae!Lorem ipsum dolor sit.
          </p>
        </div>
        <img src={pop} alt="pop" />{' '}
      </IndexImageContainer>
      <IndexImageContainer>
        <div>
          <h1>Discover an unique NFT collection never done</h1>
        </div>
        <img src={pop} alt="pop" />
      </IndexImageContainer>
      <IndexImageContainer>
        <div>
          <h1>Discover an unique NFT collection never done</h1>
        </div>
        <img src={pop} alt="pop" />
      </IndexImageContainer>
      <IndexImageContainer>
        <div>
          <h1>Discover an unique NFT collection never done</h1>
        </div>
        <img src={pop} alt="pop" />
      </IndexImageContainer>
      <IndexImageContainer>
        <div id="footer">
          <h1>Discover an unique NFT collection never done</h1>
        </div>
        <img src={pop} alt="pop" />
      </IndexImageContainer>
    </>
  );
};

export default FullApp;
