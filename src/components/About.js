import React from 'react';
import styled from 'styled-components';

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
    
    span {
    
    background: #5deb50;
    
    }

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
opacity: .6;
-webkit-appearance: none;
-webkit-box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
-moz-box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 

z-index: 9;

top: 30px;
left: 150px;
@media (min-width: 768px) {
width: 350px;
height: 350px;
top: 400px;
left: 400px;

}

@media (min-width: 1024px) {
margin: 50px;
position: static;
opacity: 1;

}

`;

const ImageDiv = styled.div`


@media(min-width: 1024) {

width: 50%;
}

`

const About = () => {

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
                <AboutSubject>Why you should to <br/> choose me?</AboutSubject>
                <TextStyled>
                    Are you dream about fast, responsive with SEO
                    assist and secure website or e-commerce <span>project which are
                    exclusively for your business goals? </span>
                    Here exactly what you need, because
                    I can prepare <span>the best solution for you</span>  <br/>
                    Why?<br/>
                    Firstly, <span>I do not use ready template</span>,
                    all of my projects are <span>create special for you</span><br/>
                    Secondly, My products come from <span>pure code.</span><br/>
                    <span> I do not use any website creators </span>
                     which generate many redundant code in your website. <br/>
                    And the most important.
                    You as my customer have <span>full technical support</span><br/>
                    You are interested in? So <span>let's talk</span>
                </TextStyled>
            </DivStyled>
        </AboutStyled>
    )
}
export default About;