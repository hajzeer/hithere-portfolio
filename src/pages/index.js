import React from "react"
import styled, {createGlobalStyle} from 'styled-components'

import Header from './../components/Header'
import About from "../components/About";
import Services from "../components/Servises";
import ContactForm from "../components/ContactForm";
import Hamburger from "../components/Hamburger";

const GlobalStyle = createGlobalStyle`

body {

margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Lato', sans-serif;
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



const IndexPage = () => (
    <>
        <GlobalStyle/>
        <NavStyled>
            <Hamburger/>
        </NavStyled>
        <Header/>
        <About/>
        <Services/>
        <ContactForm/>
    </>
    )

export default IndexPage
