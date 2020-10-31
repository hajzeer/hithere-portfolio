import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ServicesList from "./ServicesList";

import Globe from './../images/globe.svg';
import GlobeAlt from './../images/globe-alt.svg';
import Cart from './../images/shopping-cart.svg';
import Desktop from './../images/desktop-computer.svg';

const ServicesContainerStyled = styled.div`
overflow: hidden;
width: 100%;
height: auto; 
background: #99ff00;
`;

const DivStyled = styled.div`
z-index:999;
width: 100%;
background: transparent;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const MyServices = [
    {
      id: 0,
      name: 'RESPONSIVE WEBSITES',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at elit enim. Vivamus dui elit, sollicitudin sit amet commodo ac, sollicitudin non sapien',
        image: Globe
    },
    {
        id: 1,
        name: 'LANDING-PAGE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at elit enim. Vivamus dui elit, sollicitudin sit amet commodo ac, sollicitudin non sapien',
        image: GlobeAlt
    },
    {
        id: 2,
        name: 'E-COMMERCE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at elit enim. Vivamus dui elit, sollicitudin sit amet commodo ac, sollicitudin non sapien',
        image: Cart
    },
    {
        id: 3,
        name: 'LAYOUT DESIGN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at elit enim. Vivamus dui elit, sollicitudin sit amet commodo ac, sollicitudin non sapien',
        image: Desktop
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
            <DivStyled>
                <ServicesList ref={serviceRef} items={MyServices}/>
            </DivStyled>
        </ServicesContainerStyled>
    )
}

export default Services;