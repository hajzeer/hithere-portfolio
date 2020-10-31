import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ServicesStyled = styled.section`
    
    overflow: hidden;
    z-index: 1;
    width: 90%;
    height: auto;
    margin: 20px;
    top: 0;
    left: 0;
    border: none;
    background: #ffffff;
    
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
`;

const AboutSubject = styled.h2`

`;

const TextStyled = styled.p`
    
    font-size: 20px;
    margin: 40px;

`;

const ImageStyled = styled.img`
width: 35px;
height: 35px;
color: #000000;


`;

const ServicesList = ({items}) => (
    items.map(({id, name, description, image}) => {
        return(
        <ServicesStyled key={id}>
            <AboutSubject>{name}</AboutSubject>
            <ImageStyled src={image}></ImageStyled>
            <TextStyled>{description}</TextStyled>
        </ServicesStyled>
        )})
)

ServicesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape( {

    }))
}

ServicesList.defaultProps = {
    items: []
}

export default ServicesList;