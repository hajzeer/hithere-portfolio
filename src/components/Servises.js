import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ServicesList from "./ServicesList";

import Globe from './../images/globe.svg';
import Cart from './../images/shopping-cart.svg';
import Mobile from './../images/device-mobile.svg';

const ServicesContainerStyled = styled.div`
overflow: hidden;
width: 100%;
height: auto; 
background: #99ff00;
text-align: center;

`;

const DivStyled = styled.div`
z-index:999;
width: 100%;
background: transparent;


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (min-width: 1024px) {


flex-direction: row;
align-items: flex-start;
}
`;

const AboutSubject = styled.h2`

`;

const MyServices = [
    {
      id: 0,
      name: 'RESPONSIVE WEBSITES',
      description:'Did you know that 53% of total internet time is on mobile devices? ' +
          'This is a reason why is so much important to have full responsive website ' +
          ' which is fit with every device which you could find and I know how to do it. ' +
          'Usage of pure code programming save us from any problems with responsive  ',
      image: Mobile
    },
    {
        id: 1,
        name: 'LANDING PAGE',
        description: 'Why are you better than your market competition? ' +
            'This is a responsibility of landing page. ' +
            'To grow up your ads opportunity and overtake competitor. ' +
            'It might be a normal daily website, but the biggest different ' +
            'is a type of creation. This website do not present you, ' +
            'It prove why you are the best',
        image: Globe
    },
    {
        id: 2,
        name: 'E-COMMERCE',
        description: 'And again I need to tell you about pure code. ' +
            'Many company which will create your on line shop use ready template ' +
            'it is fast, it is cheap but only for them, you pay the same price ' +
            'and your e-commerce project look like any online shop in the web. ' +
            'Do not be the same like other. BE BETTER, ' +
            'I prepare template special for you, and create your shop better than ' +
            'your competition ' +
            'I will support you after finish production ',
        image: Cart
    }
]



const Services = () => {

    let serviceRef = useRef(null);

    useEffect(() => {

        const sections = document.querySelectorAll('section');
        gsap.registerPlugin(ScrollTrigger)

        sections.forEach(subject => {
            gsap.fromTo(subject,
                {opacity: 0, x: '-=500'},
                {opacity: 1, x: 0, stagger: 0.4, duration: 1, ease: 'power4.Out',
                    scrollTrigger: {
                        trigger: subject,
                        start: 'top 75%',
                        toggleActions: "play reverse play reverse",
                    }});
        });

    })

    return(
        <ServicesContainerStyled ref={el => (serviceRef = el)}>
            <AboutSubject>What I could offer you</AboutSubject>
            <DivStyled>
                <ServicesList ref={serviceRef} items={MyServices}/>
            </DivStyled>
        </ServicesContainerStyled>
    )
}

export default Services;