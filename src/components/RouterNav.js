import React, {useEffect} from "react";
import {Link} from "gatsby"
import styled from "styled-components";
import gsap from "gsap"

const RouterNav = ({visibility, unActive}) => {

    const RouterNavStyled = styled.div`
    z-index: 99;
    display: none;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #FFFFFF;

    `;

    const RouterNavInnerStyled = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    `;

    const StyledLink = styled(Link)`
    color: #1a1a1a;
    font-size: 40px;
    margin: 20px;
    
    @media (min-width: 768px) {
        font-size: 50px;
    }
    
`;

    const StaggerReveal = (node1, node2) => {
        gsap.from([node1, node2],
            {
                duration: 1.5,
                height: 0,
                transformOrigin: 'left',
                x: '-100%',
                ease: 'Power4.easeOut',
                stagger: {
                    amount: .3
                }
            })
    }

    useEffect(() => {
        const RouterNav = document.querySelector(".router__nav")

        if(visibility.clicked === false) {

            gsap.to(RouterNav, {duration: 1, height: 0, ease: 'Power4.easeOut', stagger: {amount: 0.7}})
            gsap.to(RouterNav, {duration: 1, css:{display:'none'} })

        } else if(visibility.clicked === true ||
            (visibility.clicked === true && visibility.initial === null)) {

            gsap.to(RouterNav, {duration: 0, css:{display:'block'}})
            gsap.to(RouterNav,{duration: 0, opacity: 1, height: '100%'})
            StaggerReveal(RouterNav)
        }
    }, [visibility])

    return (
        <RouterNavStyled className="router__nav">
            <RouterNavInnerStyled>
                <StyledLink to='/' onClick={unActive}>Home</StyledLink>
                <StyledLink to='/portfolio' onClick={unActive}>Portfolio</StyledLink>
                <StyledLink to='/contact' onClick={unActive}>Contact</StyledLink>
            </RouterNavInnerStyled>
        </RouterNavStyled>
    )

}
export default RouterNav;