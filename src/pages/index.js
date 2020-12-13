import React from "react"
import styled, {createGlobalStyle} from 'styled-components'
import {Helmet} from "react-helmet";
import {graphql} from "gatsby";

import Header from './../components/Header'
import About from "../components/About";
import Services from "../components/Servises";
import ContactForm from "../components/ContactForm";
import Hamburger from "../components/Hamburger";
import SEO from "../components/seo"


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



const IndexPage = ({data}) => (
    <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"/>
        </Helmet>
        <SEO
            title={data.site.siteMetadata.title}
            description={data.site.siteMetadata.description}
            image={data.file.childImageSharp.fluid}
        />
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
export const query = graphql`
    query{
        site {
            siteMetadata {
                description
            }
        }
        file(relativePath: {eq:"image.png"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`


export default IndexPage

