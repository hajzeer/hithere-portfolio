import React, {useEffect} from 'react';
import styled from 'styled-components';
import PortfolioList from "./PortfolioList";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";

import SrebrnaCmaImageDesktop from '../images/srebrnacmaDesktop.png';
import SrebrnaCmaImageMobile from '../images/srebrnacmaMobile.png';
import GrupaCODAImageDesktop from '../images/codaDesktop.png';
import GrupaCODAImageMobile from '../images/codaMobile.png';
import SymetriaImageDesktop from '../images/SymetriaDesktop.png';
import SymetriaImageMobile from '../images/SymetriaMobile.png';
import HomeArtDesktop from '../images/HomeArtDesktop.png';
import HomeArtMobile from '../images/HomeArtMobile.png';

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
        websiteUrl: 'https://srebrnacma.pl/',
    },
    {
        id: 1,
        name: 'Grupa CODA',
        imageDesktop: GrupaCODAImageDesktop,
        imageMobile: GrupaCODAImageMobile,
        websiteUrl: 'https://codagroup.netlify.app/',

    },
    {
        id: 2,
        name: 'Symetria Promienista',
        imageDesktop: SymetriaImageDesktop,
        imageMobile: SymetriaImageMobile,
        websiteUrl: 'https://symetria-promienista.netlify.app/',
    },
    {
        id: 3,
        name: 'Home Art',
        imageDesktop: HomeArtDesktop,
        imageMobile: HomeArtMobile,
        websiteUrl: 'https://home-art.org/',
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