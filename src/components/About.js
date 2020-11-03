import React from 'react';
import styled from 'styled-components';

import MyImage from './../images/my-photo.png';

const AboutStyled = styled.div`
overflow: hidden;
width: 100%;
height: 100vh;



`;

const BackgroundDiv = styled.div`
position: absolute;
border-bottom: 100vh solid #99ff00;
border-right: 100vw solid transparent;
margin: 0;
padding: 0;
`;

const DivStyled = styled.div`

position: absolute;
background: transparent;

display: flex;
flex-direction: column;
align-items: center;


z-index: 99;
`;

const AboutSubject = styled.h2`
    position: relative;
    top: -200px;
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

`;

const About = () => {

    return (
        <AboutStyled>
            <ImageStyled
                src={MyImage}
                alt='Me'
                title='Me'
            />
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