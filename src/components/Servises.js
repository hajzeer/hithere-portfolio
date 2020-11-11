import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ServicesList from "./ServicesList";
import {useIntl} from 'gatsby-plugin-intl';

import Globe from './../images/globe.svg';
import Cart from './../images/shopping-cart.svg';
import Mobile from './../images/device-mobile.svg';

const ServicesContainerStyled = styled.div`
overflow: hidden;
width: 100%;
height: auto; 
background: #67a6e6;
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
      image: Mobile
    },
    {
        id: 1,
        name: 'LANDING PAGE',
        image: Globe
    },
    {
        id: 2,
        name: 'E-COMMERCE',
        image: Cart
    }
]



const Services = () => {

    let serviceRef = useRef(null);
    const intl = useIntl();
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
            <AboutSubject>{intl.formatMessage({id: 'services_subject'})}</AboutSubject>
            <DivStyled>
                <ServicesList ref={serviceRef} items={MyServices}/>
            </DivStyled>
        </ServicesContainerStyled>
    )
}

export default Services;