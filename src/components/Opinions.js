import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';

import OpinionList from "./OpinionList";

const OpinionItems = [
    {
        id: 0,
        name: 'Rafał Kowalski - Srebrna Ćma Tattoo Studio',
        opinion: '"We only had visions of how our website could look like, ' +
            'but thanks to hiThere Studio we managed to make it true. ' +
            'Their professional approach and knowledge made get us exactly ' +
            'what we came for. Their advice turned out to be flawless, ' +
            'and positive opinions about the website itself can be heard ' +
            'from everyone. We also know that we have full technical support, ' +
            'so if we want to expand the website in the future, there will ' +
            'be no problem with it. Thank you - Srebrna Ćma Team."'
    }

]

const AboutStyled = styled.div`

width: 100%;
height: 100vh;



`;


const BackgroundDiv = styled.div`
position: absolute;
border-bottom: 100vh solid #99ff00;
border-right: 100vw solid transparent;
margin: 0;
padding: 0;
`;

const DivStyled = styled.div`
width: 100%;
height: 100vh;
position: absolute;
background: transparent;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

z-index: 99;
`;

const AboutSubject = styled.h2`

`;

const Opinions = () => {
const intl = useIntl()


    return (
        <AboutStyled>
            <BackgroundDiv/>
            <DivStyled>
                <AboutSubject>{intl.formatMessage({id: 'opinion_subject'})}</AboutSubject>
                <OpinionList items={OpinionItems}/>
            </DivStyled>
        </AboutStyled>
    )
}
export default Opinions;