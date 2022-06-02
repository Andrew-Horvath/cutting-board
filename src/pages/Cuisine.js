import React from 'react';
import styled from 'styled-components';

function Cuisine() {
    return (
        // container for search form layout and styling
        <StyledDivCuisine className='ingredient-div-container'>
            <StyledH2>Here is your Random Recipe!!</StyledH2>
        </StyledDivCuisine>
    );
}

export default Cuisine;

const StyledH2 = styled.h2`
        font-size: 3.5rem;
        font-family: Roboto Slab, Roboto, sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        color: rgba(241, 143, 1, 1);
        line-height: 1;
        margin: 0rem 0 2rem 0;
`

const StyledDivCuisine = styled.div `
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
        height: 75vh;
        max-width: 70rem;
        background: rgba(8, 76, 97, 1);
        margin: 2rem auto 0;
    },

`