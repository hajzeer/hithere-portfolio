import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OpinionListStyled = styled.section`
    overflow: hidden;
    z-index: 1;
    width: 90%;
    height: auto;
    margin: 20px;
    top: 0;
    left: 0;
    border-radius: 20px;
    background: #ffffff;
    
    
-webkit-appearance: none;
-webkit-box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
-moz-box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
box-shadow: 0 10px 20px -4px rgba(26, 26, 26,.4); 
    
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
`;

const TextStyled = styled.p`
    
    font-size: 15px;
    margin: 40px;
    
    @media (min-width: 768px) {
    
    font-size: 20px;
    
    }

`;

const OpinionList = ({items}) => (
    items.map(({id, name, opinion}) => {

        return(
        <OpinionListStyled key={id}>
            <TextStyled>{opinion}</TextStyled>
            <TextStyled>{name}</TextStyled>
        </OpinionListStyled>
        )
    })
)

OpinionList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape( {
        name: PropTypes.string,
        opinion: PropTypes.string
    }))
}

OpinionList.defaultProps = {
    items: []
}

export default OpinionList;