import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
background-color: #5deb50;
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

const PortfolioList = ({items}) => (


    items.map(({id, name, imageDesktop, imageMobile}) => {
        return(
        <PortfolioStyled key={id} >
            <ImageOuterStyled className='PortfolioDiv'>
                <ImageStyled1 className='imageDesktop' src={imageDesktop}></ImageStyled1>
                <ImageStyled2 className='imageMobile' src={imageMobile}></ImageStyled2>
            </ImageOuterStyled>
            <DescriptionOuterStyled>
                <AboutSubject>{name}</AboutSubject>
            </DescriptionOuterStyled>
        </PortfolioStyled>
        )})
)

PortfolioList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape( {
        name: PropTypes.string,
        imageDesktop: PropTypes.string,
        imageMobile: PropTypes.string,
    }))
}

PortfolioList.defaultProps = {
    items: []
}

export default PortfolioList;