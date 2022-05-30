import React, { useState } from 'react';
import styled from 'styled-components';
import SearchButton from './ButtonStandard';
import { Link } from 'react-router-dom';

const SearchForm = props => {
  const [query, setQuery] = useState("");

  
  function search(e) {
    e.preventDefault();
    console.log('You Searched');
    return false;
  }
    
    return (
      <div className="search-div-container">
        <h2 style={styles.formTitle}>Search Recipes by ingredient</h2>
          <p style={styles.formInstruct}>Please separate ingredients by comma if adding more than one ingredient.</p>
        <StyledForm onSubmit={search}>
          <fieldset className="search-items">
            <div className="container-inputs">
              <label htmlFor="search-items">Enter Search Ingredients Here</label>
              <input type="text" name="search-items" onChange={ (e) => {setQuery(e.target.value)} } placeholder="i.e. apples, pork"/>
            </div>
          </fieldset>        
          
          <Link to={'/searchResults/' + query} value={query}><SearchButton btnText='Search' /></Link>
        </StyledForm>
        </div>
    )
}

export default SearchForm;

const styles = {
  formTitle: {
    fontSize: '3.5rem',
    fontFamily: 'Roboto Slab, Roboto, sans-serif',
    fontWeight: '500',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'rgba(143, 45, 86, 1)',
    lineHeight: '1',
    margin: '0 0 2rem 0'
  },
  formInstruct: {
    color: 'rgba(8, 76, 97, 1)',
    fontSize: '2rem',
    fontFamily: 'Roboto, Roboto Slab, sans-serif',
    fontWeight: '500',
    textAlign: 'center',
    margin: '0 auto',
    width: '85%',
  }
}

const StyledForm = styled.form`    
        padding: 2rem;
        font-size: 2rem;
        border-radius: 1rem;
        width: 100%;
        margin: 2rem auto;
        background: rgba(41, 41, 41, .7);
        
        @media (min-width: 600px) {
          max-width: 60rem;

        }



        fieldset {
            outline: none;
            border: none;
        }
        label {
            display: block;
            margin: 0rem 0 1rem 0;
            font-weight: 500;
            color: rgba(217, 244, 252, 1);
            white-space: normal;
        }
        input {
            width: 100%;
            padding: 1rem;
            background: #f5e0e9;
            border-radius: 1rem;
            margin: 0 0 1rem 0;
            
              &:placeholder {
                text-transform: uppercase;
              }
              &:focus {
                outline: 1px solid blue;
              }
        }

`
