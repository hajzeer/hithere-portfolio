import React from "react"
import styled, {createGlobalStyle} from "styled-components";
import {Helmet} from "react-helmet";
import {graphql} from "gatsby";

import ContactForm from "../components/ContactForm";
import Hamburger from "../components/Hamburger";
import HeaderContact from "../components/Header-contact";
import SEO from "../components/seo";
import logo from "../images/image.png"

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




const Contact = ({data}) => (
    <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"/>
        </Helmet>
        <SEO
            title="Contact"
            description={data.site.siteMetadata.description}
            image={logo}
        />
        <GlobalStyle/>
        <NavStyled>
            <Hamburger/>
        </NavStyled>
        <HeaderContact/>
        <ContactForm/>
    </>
)
export const query = graphql`
    query{
        site {
            siteMetadata {
                description
            }
        }
    }
`


export default Contact;
