import React, {useEffect, useRef} from "react";
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
    background: #5deb50;

    `;

    const RouterNavInnerStyled = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;

    const StyledLink = styled(Link)`
    color: #000000;
    font-size: 40px;
    font-weight: 800;
    margin: 20px;
    text-decoration-color: #ffffff;
    opacity: 0;
    
    &:focus {
    transition: scale(2);
    }
    
    @media (min-width: 768px) {
        font-size: 50px;
    }
    
`;

    const StaggerReveal = (node1, node2) => {
        gsap.from([node1, node2],
            {
                duration: .8,
                height: 0,
                transformOrigin: 'left',
                x: '-100%',
                ease: 'Power4.easeOut',
                stagger: {
                    amount: .3
                }
            })
    }

    let text1 = useRef(null);
    let text2 = useRef(null);
    let text3 = useRef(null);

    useEffect(() => {
        const RouterNav = document.querySelector(".router__nav")
        const tl = gsap.timeline()
        if(visibility.clicked === false) {

            gsap.to(RouterNav, {duration: 1, height: 0, ease: 'Power4.easeOut', stagger: {amount: 0.7}})
            gsap.to(RouterNav, {duration: 1, css:{display:'none'} })

        } else if(visibility.clicked === true ||
            (visibility.clicked === true && visibility.initial === null)) {

            gsap.to(RouterNav, {duration: 0, css:{display:'block'}})
            gsap.to(RouterNav,{duration: 0, opacity: 1, height: '100%'})
            StaggerReveal(RouterNav)
            tl.fromTo(text1,
                {opacity: 0, y: '+=10px'},
                {
                    opacity: 1, delay: .8, duration: .2, y:0, ease: 'power4.easeOut'
                })
                .fromTo(text2,
                {opacity: 0, y: '+=10px'},
                {
                    opacity: 1, duration: .2, y:0, ease: 'power4.easeOut'
                })
                .fromTo(text3,
                {opacity: 0,  y: '+=10px'},
                {
                    opacity: 1, y:0, duration: .2, ease: 'power4.easeOut'
                })
        }
    }, [visibility])

    return (
        <RouterNavStyled className="router__nav">
            <RouterNavInnerStyled>
                <StyledLink ref={el => {text1 = el}} to='/' onClick={unActive}>Home</StyledLink>
                <StyledLink ref={el => {text2 = el}} to='/portfolio' onClick={unActive}>Portfolio</StyledLink>
                <StyledLink ref={el => {text3 = el}} to='/contact' onClick={unActive}>Contact</StyledLink>
            </RouterNavInnerStyled>
        </RouterNavStyled>
    )

}
export default RouterNav;