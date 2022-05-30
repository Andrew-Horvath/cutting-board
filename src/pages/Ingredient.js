import React from 'react';
import SearchForm from '../components/SearchForm';
import styled from 'styled-components';

function Ingredient() {
    return (
        // container for search form layout and styling
        <StyledDivIngredient className='ingredient-div-container'>
            {/* calling search form component */}
            <SearchForm />
        </StyledDivIngredient>
    );
}

export default Ingredient;

const StyledDivIngredient = styled.div `
    padding: 1rem;
    height: 100vh;
    border-radius: .5rem;
    margin: 2rem auto 0;

`