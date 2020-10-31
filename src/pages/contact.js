import React from "react"
import ContactForm from "../components/ContactForm";
import styled, {createGlobalStyle} from "styled-components";
import SEO from "../components/seo";
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




const Contact = () => (
    <>
        <GlobalStyle/>
        <SEO
            title='hiThere | Web development for All'
        />
        <NavStyled>
            <Hamburger/>
        </NavStyled>
        <ContactForm/>
    </>
)

export default Contact;
