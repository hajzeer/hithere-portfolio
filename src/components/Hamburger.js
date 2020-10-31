import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import gsap from 'gsap';

import RouterNav from "./RouterNav";


const Hamburger = () => {

    const HamburgerStyled = styled.button`
    padding: 10px;
    display: inline;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin-right: 0;
    
`;

    const HamburgerBoxStyled = styled.span`
    z-index: 9999;
    width: 35px;
    height: 35px;
    display: inline-block;
    position: relative;
   
    `;

    const HamburgerInnerStyled1 = styled.span`
    width: 100%;
    height: 3px;
    background-color: #000000;
    position: absolute;
    right: 0;
    top: 5px;
    
`;
    const HamburgerInnerStyled2 = styled.span`
    width: 100%;
    height: 3px;
    background-color: #000000;
    position: absolute;
    right: 0;
    top: 15px;
    
`;

    const [isVisible, setIsVisible] = useState({
        initial: false,
        clicked: null,
    })

    let HamburgerSpan1 = useRef(null);
    let HamburgerSpan2 = useRef(null);

    useEffect(()=> {

        if(isVisible.clicked === true) {
            gsap.fromTo(HamburgerSpan1,
                {
                    y: 0,
                    duration: .5
                },
                {
                    y: '5px',
                    duration: .5
                })
            gsap.to(HamburgerSpan1, {rotate: 45, duration: .25, delay: .6})
            gsap.fromTo(HamburgerSpan2,
                {
                    y: 0,
                    duration: 1
                },
                {
                    y: '-5px',
                    duration: .5
                })
            gsap.to(HamburgerSpan2, {rotate: -45, duration: .25, delay: .6})
        }
    })


    const handleVisibility = () => {
        if(isVisible.initial === false) {
            setIsVisible({
                initial: null,
                clicked: true,
            })
        } else if(isVisible.clicked === true) {
            setIsVisible({
                clicked: !isVisible.clicked
            })
        } else if(isVisible.clicked === false) {
            setIsVisible({
                clicked: !isVisible.clicked
            })
        }
    };


    return (
        <div>
            <HamburgerStyled  onClick={handleVisibility}>
                <HamburgerBoxStyled>
                    <HamburgerInnerStyled1 ref={el => (HamburgerSpan1 = el)}/>
                    <HamburgerInnerStyled2 ref={el => (HamburgerSpan2 = el)}/>
                </HamburgerBoxStyled>
            </HamburgerStyled>
            <RouterNav visibility={isVisible} unActive={handleVisibility}/>
        </div>
    )
}
export default Hamburger;