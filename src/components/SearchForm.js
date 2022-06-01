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
          <StyledForm onSubmit={search}>
            <p className="search-instruct">Please separate ingredients by comma if adding more than one ingredient.</p>
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
    margin: '0rem 0 4rem 0'
  },
  formInstruct: {
    color: 'rgba(241, 143, 1, 1)',
    fontSize: '1.8rem',
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
        border-radius: .5rem;
        width: 100%;
        margin: .5rem auto;
        background: rgba(6, 59, 75, 1);
        
        @media (min-width: 600px) {
          max-width: 60rem;
        }

        .search-instruct {
            color: rgba(153, 194, 77, 1);
            font-size: 1.8rem;
            font-family: Roboto, Roboto Slab, sans-serif;
            font-weight: 500;
            margin: 0 auto 2rem;
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
            color: rgba(8, 76, 97, 1);
            background: rgba(218, 243, 251, 1);
            border-radius: 1rem;
            border: none;
            margin: 0 0 2rem 0;
            
              &:placeholder {
                text-transform: uppercase;
              }
              &:focus {
                box-shadow: 0 0 .3rem .3rem rgba(153, 194, 77, 1);
                border: none;
                outline: 1px solid rgba(241, 143, 1, 1);
              }
        }

`
