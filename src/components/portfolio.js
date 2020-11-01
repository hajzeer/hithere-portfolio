import React, {useEffect} from 'react';
import styled from 'styled-components';
import PortfolioList from "./PortfolioList";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import SrebrnaCmaImageDesktop from '../images/srebrnacmaDesktop.png';
import SrebrnaCmaImageMobile from '../images/srebrnacmaMobile.png';
import GrupaCODAImageDesktop from '../images/codaDesktop.png';
import GrupaCODAImageMobile from '../images/codaMobile.png';
import SymetriaImageDesktop from '../images/SymetriaDesktop.png';
import SymetriaImageMobile from '../images/SymetriaMobile.png';
import AutoserwisImageDesktop from '../images/AutoserwisDesktop.png';
import AutoserwisImageMobile from '../images/AutoserwisMobile.png';
import gsap from "gsap";

const PortfolioDivStyled = styled.div`

width: 100%;
background: #ffffff;

`;

const PortfolioItems = [
    {
        id: 0,
        name: 'Srebrna Ćma Tattoo Studio',
        imageDesktop: SrebrnaCmaImageDesktop,
        imageMobile: SrebrnaCmaImageMobile,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi dui, viverra id nulla eget, aliquet lobortis est. Praesent aliquet malesuada tristique. Duis vel faucibus nunc. Nulla nec rutrum risus.'
    },
    {
        id: 1,
        name: 'Grupa CODA',
        imageDesktop: GrupaCODAImageDesktop,
        imageMobile: GrupaCODAImageMobile,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi dui, viverra id nulla eget, aliquet lobortis est. Praesent aliquet malesuada tristique. Duis vel faucibus nunc. Nulla nec rutrum risus.'

    },
    {
        id: 2,
        name: 'Symetria Promienista',
        imageDesktop: SymetriaImageDesktop,
        imageMobile: SymetriaImageMobile,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi dui, viverra id nulla eget, aliquet lobortis est. Praesent aliquet malesuada tristique. Duis vel faucibus nunc. Nulla nec rutrum risus.'
    },
    {
        id: 3,
        name: 'Autoserwis',
        imageDesktop: AutoserwisImageDesktop,
        imageMobile: AutoserwisImageMobile,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi dui, viverra id nulla eget, aliquet lobortis est. Praesent aliquet malesuada tristique. Duis vel faucibus nunc. Nulla nec rutrum risus.'

    }
]

const PortfolioInner = () => {

    useEffect(()=> {


        const imageDesktop = document.querySelectorAll('.imageDesktop');
        const imageMobile = document.querySelectorAll('.imageMobile')


        gsap.registerPlugin(ScrollTrigger);

        imageDesktop.forEach(imageDesktop => {
            gsap.fromTo(imageDesktop,
                {opacity: 0, x: '-=50px'},
                {opacity: 1, duration: 1, x: 0,
                    scrollTrigger: {
                        trigger: imageDesktop,
                        start: 'top center',
                    }})

        })
        imageMobile.forEach(imageMobile => {
            gsap.fromTo(imageMobile,
                {opacity: 0, x: '+=50px'},
                {opacity: 1, duration: 1, x: 0,
                    scrollTrigger: {
                        trigger: imageMobile,
                        start: 'top center',
                    }})
        })

    })

    return (
        <PortfolioDivStyled>
            <PortfolioList items={PortfolioItems}/>
        </PortfolioDivStyled>
    )
}
export default PortfolioInner;