import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import Hamburger from "../components/Hamburger";
import HeaderPortfolio from "../components/Header-portfolio";
import ContactForm from "../components/ContactForm";

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


const portfolio = () => {
    return(
        <>
            <GlobalStyle/>
            <NavStyled>
                <Hamburger/>
            </NavStyled>
            <HeaderPortfolio/>
            <ContactForm/>
        </>
    )
}
export default portfolio;