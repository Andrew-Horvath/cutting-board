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
      <div style={styles.containerForm}>
        <h2 style={styles.formTitle}>Search Recipes</h2>
        <StyledForm onSubmit={search}>
          <fieldset className="search-items">
            <div className="container-inputs">
              <label htmlFor="search-items">Enter Search Ingredients</label>
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
  containerForm: {
    padding: '2rem',
  },
  formTitle: {
    fontSize: '2rem',
    fontFamily: 'Roboto Slab, Roboto, sans-serif',
    fontWeight: '500',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#73d2de',
  },
}

const StyledForm = styled.form`    
        padding: 2rem;
        font-size: 2rem;
        text-transform: uppercase; 
        border-radius: 1.5rem;
        
        fieldset {
            outline: none;
            border: none;
            
        }
        label {
            display: block;
            margin: 0rem 0 1rem 0;
            font-weight: 500;
            color: #f18f01;
        }
        input {
            width: 90%;
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
        .search-items {
            display: flex;
            flex-direction: row;
            gap: 0 2rem;
            & div {
              flex: 2 0 40%;
            }
        }
`
