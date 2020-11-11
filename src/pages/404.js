import React from "react"

import {Helmet} from "react-helmet";
import Header404 from "../components/Header-404";
import styled, {createGlobalStyle} from "styled-components";
import Hamburger from "../components/Hamburger";

const GlobalStyle = createGlobalStyle`

body {

margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Lato', sans-serif;

overflow-x: hidden;
}

`;

const NavStyled = styled.nav`

position: fixed;
width: 100%;
padding: 0;
margin: 0;
top: 0;
left: 0;
z-index: 9999;
background: transparent;

`;

const NotFoundPage = () => (
  <>
        <GlobalStyle/>
      <Helmet
          title='hiThere Studio | Web development for All'
      />
      <NavStyled>
          <Hamburger/>
      </NavStyled>
      <Header404/>
      </>
)

export default NotFoundPage
