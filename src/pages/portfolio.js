import React from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {Helmet} from "react-helmet";
import {graphql} from "gatsby";

import Hamburger from "../components/Hamburger";
import HeaderPortfolio from "../components/Header-portfolio";
import ContactForm from "../components/ContactForm";
import PortfolioInner from "../components/portfolio";
import Opinions from "../components/Opinions";
import SEO from "../components/seo";


const GlobalStyle = createGlobalStyle`

body {
overflow-x: hidden;
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


const portfolio = ({data}) => {


    return(
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"/>
            </Helmet>
            <SEO
                title="Portfolio"
                description={data.site.siteMetadata.description}
                image={data.file.childImageSharp.fluid}
            />
            <GlobalStyle/>
            <NavStyled>
                <Hamburger/>
            </NavStyled>
            <HeaderPortfolio/>
            <PortfolioInner/>
            <Opinions/>
            <ContactForm/>
        </>
    )
}
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
                    src
                }
            }
        }
    }
`

export default portfolio;