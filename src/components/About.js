import React from 'react';
import styled from 'styled-components';
import { useIntl } from "gatsby-plugin-intl";

import MyImage from './../images/my-photo.png';

const AboutStyled = styled.div`
overflow: hidden;
width: 100%;
height: 100vh;

@media (min-width: 1024px) {
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
align-items: center;
}
`;


const DivStyled = styled.div`

position: absolute;
background: transparent;

display: flex;
flex-direction: column;
align-items: center;


z-index: 99;

@media (min-width: 1024px) {
position: static;
width: 50%;

}
`;

const AboutSubject = styled.h2`
    position: relative;
    top: -200px;
    
    @media (min-width: 1024px) {
top: 0;
position: static;
font-size: 1.5em;

}
`;

const TextStyled = styled.p`
    position: relative;
    top: -250px;
    font-size: 1em;
    margin: 40px;
    font-weight: 700;

@media (min-width: 1024px) {
top: 0;
position: static;
font-size: 1.2em;

}

`;

const ImageStyled = styled.img`
overflow: hidden;
position: relative;
width: 200px;
height: 200px;
border-radius: 100%;
opacity: .4;
-webkit-appearance: none;
-webkit-box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
-moz-box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 

z-index: 9;

bottom: 0;
left: 150px;
@media (min-width: 768px) {
width: 350px;
height: 350px;
top: 400px;
left: 400px;

}

@media (min-width: 1024px) {

position: static;
opacity: 1;

}

`;

const ImageDiv = styled.div`


@media(min-width: 1024px) {
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
width: 50%;
}

`

const About = () => {
    const intl = useIntl();
    return (
        <AboutStyled>
            <ImageDiv>
                <ImageStyled
                    src={MyImage}
                    alt='Me'
                    title='Me'
                />
            </ImageDiv>
            <DivStyled>
                <AboutSubject>{intl.formatMessage({ id: "about_subject_text" })}</AboutSubject>
                <TextStyled>
                    {intl.formatMessage({ id: "about_text" })}
                </TextStyled>
            </DivStyled>
        </AboutStyled>
    )
}
export default About;