import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {FormattedMessage} from 'gatsby-plugin-intl';

const PortfolioStyled = styled.section`
    
    overflow: hidden;
    z-index: 1;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    background: #ffffff;
        
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 1024px) {
    
    flex-direction: row-reverse;
    
    }

`;

const AboutSubject = styled.h2`
margin: 0;
margin-top: 30px;
padding: 10px;
background-color: #c2f2f0;
background-size: 50px 50px;
background-repeat: no-repeat;
`;

const ImageStyled1 = styled.img`
opacity: 0;
position: absolute;
width: 100%;

@media (min-width: 1024px) {
width: 100%;


}

`;
const ImageStyled2 = styled.img`
opacity: 0;
position: relative;
width: 40%;
left: 200px;
top: 50px;

@media (min-width: 768px) {
width: 30%;
left: 500px;
top: 80px;

}

@media (min-width: 1024px) {
width: 30%;
left: 60%;
top: 40px;

}


`;

const ImageOuterStyled = styled.div`
position: relative;
width: 100%;
height: 50%;
display: flex;
flex-direction: row;
align-items: center;


`;
const DescriptionOuterStyled = styled.div`
width: 100%;
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

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

const handleClick = (e) => {
    window.open(e, '_blank')
}

const PortfolioList = ({items}) => (


    items.map(({id, name, imageDesktop, imageMobile, websiteUrl}) => {
        return(
        <PortfolioStyled key={id} >
            <ImageOuterStyled className='PortfolioDiv'>
                <ImageStyled1 className='imageDesktop' src={imageDesktop}></ImageStyled1>
                <ImageStyled2 className='imageMobile' src={imageMobile}></ImageStyled2>
            </ImageOuterStyled>
            <DescriptionOuterStyled>
                <AboutSubject>{name}</AboutSubject>
                <ButtonStyle onClick={() => handleClick(websiteUrl)}>
                    <FormattedMessage id='demo__button'/>
                </ButtonStyle>
            </DescriptionOuterStyled>
        </PortfolioStyled>
        )})
)

PortfolioList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape( {
        name: PropTypes.string,
        imageDesktop: PropTypes.string,
        imageMobile: PropTypes.string,
        websiteUrl: PropTypes.string,
    }))
}

PortfolioList.defaultProps = {
    items: []
}

export default PortfolioList;