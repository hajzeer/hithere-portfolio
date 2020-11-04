import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from "gatsby";
import {FormattedMessage} from 'gatsby-plugin-intl';

const ServicesStyled = styled.section`
    
    overflow: hidden;
    z-index: 1;
    width: 90%;
    height: auto;
    margin: 20px;
    top: 0;
    left: 0;
    border-radius: 20px;
    background: #ffffff;
    
    
-webkit-appearance: none;
-webkit-box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
-moz-box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
    
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 1024px) {
    
    width: 30%;
    height: auto;
    margin: 20px;
    font-size: 20px;
}
`;

const AboutSubject = styled.h2`

`;

const TextStyled = styled.p`
    font-weight: 700;
    font-size: 20px;
    margin: 40px;

`;

const ImageStyled = styled.img`
width: 35px;
height: 35px;
color: #000000;


`;

const ButtonStyle = styled.button`
margin: 15px;
height: 30px;
width 80%;
border-radius: 25px;
background-color: #1a1a1a;
border-color: #1a1a1a;
border: 3px solid;
cursor: pointer;
font-size: 15px;
font-weight: 900;
color: #FFFFFF;
text-decoration: none;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
&:hover, &:focus {
outline: none;
background: #FFFFFF;
color: #1a1a1a;
}
@media (min-width: 768px) {
    margin: 20px;
    height: 45px;
    font-size: 25px;
}
@media (min-width: 1024px) {
    
    width: 40%;
    height: auto;
    margin: 20px;
    font-size: 20px;
}
`;

const ServicesList = ({items}) => (

    items.map(({id, name, image, description}) => {
        return(
        <ServicesStyled key={id}>
            <AboutSubject>{name}</AboutSubject>
            <ImageStyled src={image}></ImageStyled>
            <TextStyled>{description}</TextStyled>
            <ButtonStyle as={Link} to='contact'><FormattedMessage id='ask_button'/></ButtonStyle>
        </ServicesStyled>
        )})
)

ServicesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape( {
        name: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string
    }))
}

ServicesList.defaultProps = {
    items: []
}

export default ServicesList;