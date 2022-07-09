import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink as Hash } from 'react-router-hash-link';
import pop from './assets/tobi.png';
import logo from './assets/logoo.png';

const NavbarContainer = styled.div`
  color: white;
  display: flex;
  font-style: italic;
  justify-content: space-between;
  color: red;
  width: 1200px;
  transform: skewY(5deg);

  margin: 0 auto;
  padding-top: 3rem;
  & > img {
    width: 100px;
    height: 50px;
  }
`;

const Nav = styled.div`
  a {
    color: white;

    text-decoration: none;
    margin-left: 2rem;
  }
`;

const IndexImageContainer = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  margin: 0 auto;
  transform: skewY(5deg);

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
  }
`;

const FirstBlock = styled.div`
  width: 100%;
  height: 100vh;
  transform: skewY(-5deg);

  background-image: linear-gradient(20deg, #ff5f6d, #ffc371);
`;

const SecondBlock = styled.div`
  height: 100vh;
  margin: 0 auto;
  background-image: linear-gradient(20deg, #ff5f6d, #ffc371);
  transform: skewY(-5deg);
  & > div {
    max-width: 50em;
    margin: 0 auto;
    transform: skewY(5deg);
  }
  img {
    height: 70%;
    width: 70%;
    display: block;
  }
`;
const ThirdBlock = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  img {
    height: 70%;
    width: 70%;
    display: block;
  }
`;

const FourthBlock = styled.div`
  height: 100vh;
  margin: 0 auto;
  background-image: linear-gradient(45deg, #654ea3, #eaafc8);
  transform: skewY(5deg);
  & > div {
    max-width: 50em;
    margin: 0 auto;
    transform: skewY(-5deg);
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
      <FirstBlock>
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
      </FirstBlock>
      <SecondBlock>
        <div>
          <div>
            <h2>Welcome to our unique NFT collection.</h2>
            <p>We believe that everyone should be able to participe to a launch of a amazing nft collection. We propose a fair launch. No OG spot, no whitelist. The web3 has been designed for this purpose. Internet by the people, for the people.</p>
          </div>
          <img src={pop} alt="pop" />
        </div>
      </SecondBlock>
      <ThirdBlock>
        <div>
          <div>
            <h1>Discover an unique NFT collection never done</h1>
          </div>
          <img src={pop} alt="pop" />
        </div>
      </ThirdBlock>
      <FourthBlock>
        <div>
          <div>
            <h1>Discover an unique NFT collection never done</h1>
          </div>
          <img src={pop} alt="pop" />
        </div>
      </FourthBlock>
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
