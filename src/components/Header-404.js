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

border-top: 100vh solid #67a6e6;
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
color: #67a6e6;

`;

const Header404 = () => {

    let leftSite = useRef(null);
    let subject = useRef(null);

    useEffect(()=> {
        const tl = gsap.timeline();

        tl.fromTo(leftSite,
            {opacity: 0, x:'-=400px', duration: 1.3},
            {opacity:1, x: 0})
            .fromTo(subject,
                {opacity: 0, y:'+=50px', duration: 1},
                {opacity:1, y: 0})

    })

    return(
    <HeaderContainerStyled>
        <HeaderInnerDiv ref={el => (leftSite = el)}>
        </HeaderInnerDiv>
        <DivStyled ref={el => (subject = el)}>
            <SubjectStyled>
                404<br/>
                Page not found, please open navbar<SpanStyled>.</SpanStyled>
            </SubjectStyled>
           </DivStyled>
    </HeaderContainerStyled>
    )
}
export default Header404;