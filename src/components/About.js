import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

import MyImage from './../images/my-photo.png';

const AboutStyled = styled.div`

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
justify-content: center;

z-index: 99;
`;

const AboutSubject = styled.h2`

`;

const TextStyled = styled.p`
    
    font-size: 20px;
    margin: 40px;

`;

const ImageStyled = styled.img`

position: relative;
width: 200px;
height: 200px;
border-radius: 100%;

-webkit-appearance: none;
-webkit-box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
-moz-box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 

z-index: 9;

top: 50px;
left: 150px;

`;

const About = () => {

    let AboutRef = useRef(null);
    let ImageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(ImageRef,
            {y: 0, x: 0},
            {duration: 1,
                y: '300px',
                ease: 'Power4.easeOut',
                scrollTrigger: {
                    trigger: AboutRef,
                    start: 'top 30%',
                    scrub: 1
                }})
    })


    return (
        <AboutStyled ref={el => (AboutRef = el)}>
            <BackgroundDiv/>
            <ImageStyled ref={el => (ImageRef = el)}
                src={MyImage}
                alt='my photo'/>
                <DivStyled>
                    <AboutSubject>Why you should to <br/> choose me?</AboutSubject>
                    <TextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at elit enim. Vivamus dui elit, sollicitudin sit amet commodo ac, sollicitudin non sapien.</TextStyled>
                </DivStyled>
        </AboutStyled>
    )
}
export default About;