import React, {useEffect, useRef} from "react";
import gsap from 'gsap';
import styled from 'styled-components';

const HeaderContainerStyled = styled.div`

width: 100%;
height: 100vh;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const HeaderInnerDiv = styled.div`

border-bottom: 100vh solid #99ff00;
border-right: 100vw solid transparent;
margin: 0;
padding: 0;
opacity: 0;

`;

const DivStyled = styled.div`

position: absolute;
background: transparent;
opacity: 0;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const SubjectStyled = styled.h1`

font-size: 60px;
font-weight: 700;
`;

const SpanStyled = styled.span`
color: #99ff00;

`;

const ArrowDown = styled.i`
    opacity: 0;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 30px;
    height: 30px;
    border: 3px solid;
    border-radius: 100px;

&:after {
        content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    border-bottom: 3px solid;
    border-right: 3px solid;
    transform: rotate(45deg);
    left: 7px;
    top: 5px
}
`;

const HeaderContact = () => {

    let leftSite = useRef(null);
    let subject = useRef(null);
    let arrow = useRef(null)

    useEffect(()=> {
        const tl = gsap.timeline();

        tl.fromTo(leftSite,
            {opacity: 0, x:'-=400px', duration: 1.3},
            {opacity:1, x: 0})
            .fromTo(subject,
                {opacity: 0, y:'+=50px', duration: 1},
                {opacity:1, y: 0})

            .fromTo(arrow,
            {opacity: 0, y: '-=10px'},
            {opacity: 1, y: 0, duration: 1.5, repeat: -1, yoyo: true})

    })

    return(
    <HeaderContainerStyled>
        <HeaderInnerDiv ref={el => (leftSite = el)}>
        </HeaderInnerDiv>
        <DivStyled ref={el => (subject = el)}>
            <SubjectStyled>
                Contact<SpanStyled>.</SpanStyled>
            </SubjectStyled>
            <ArrowDown ref={el => (arrow = el)}></ArrowDown>
        </DivStyled>
    </HeaderContainerStyled>
    )
}
export default HeaderContact;