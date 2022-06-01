import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


function SearchResults() {
  const [userSearch, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();
  const apiPath = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=';
  const apiKey = '4fdab9234b0245be8581462069bd738f'

  let {query} = useParams();

  useEffect(() => {
   
      fetch(`${apiPath}${apiKey}&ingredients=${query}&number=5`)
      .then((response) => {

        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        console.log("data", data);
        setRecipeData(data)
      })
      .catch ((err) => {
        console.log("You're ridiculous attempt at accessing an API just caused an ERROR!!", err);
        setErr(err);
      })
      .finally(() => {
        console.log("FINALLY");
        setLoading(false);
      });
    }, [query]);
    
    if (loading) return <p style={styles.loadingStyle}>Your Recipes are on the way!...</p>;
    if (err) return "Error!";
      
  return (
    <RecipesStyled id='search-results-section'>
      
        {userSearch.map (data => (
            <article key={data.id} className="recipe-card">
                <h3 className='recipe-title'>{data.title}</h3>
                  <img className='recipe-img' src={data.image} alt='recipe finished product' />
            </article>
          
        ))}

        {/* {!loading && userData.length > 0 ? userData.map(user => {
          const {} = user;
          return 
        }) : null
      } */}
    </RecipesStyled>
  )
}
export default SearchResults;

const styles = {
    loadingStyle: {
        fontSize: '3rem',
        textTransform: 'uppercase',
        color: 'rgba(143, 45, 86, 1)',
        marginTop: '2rem',

    },
}

const RecipesStyled = styled.section `
    box-sizing: border-box;
    background: rgba(6, 59, 75, 1);
    width: 100%;
    margin: 2rem 0;
    padding: 1.5rem;
        @media (min-width:400px) {
        padding: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
        gap: 3rem 3rem;
      }
      @media (min-width:650px) {
        margin: 3rem 0;
        padding: 3rem 2rem 2rem;
      }

  .recipe-card {
    background: rgba(218, 243, 251, 1);
    margin: 0 auto 2.5rem;
    padding: 1.5rem;
    box-shadow: 7px 7px 7px 5px rgba(218, 243, 251, .3);
    position: relative;

    @media (min-width: 400px) {
          min-width: 368px;
          max-width: 400px;
          flex: 1 1 0;
          text-align: center;
          margin: 0 auto;
    }
    @media (min-width: 650px) {
      min-width: 300px;
      max-width: 600px;
      padding: 2rem;
    }
    // @media (min-width: 950px) {
    //   max-width: 500px;

    // }
  }

  .recipe-title {
    font-family: 'Roboto Slab', 'Roboto';
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(8, 76, 97, 1);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 400px) {
      margin: 0 auto;
      max-width: 340px;
    }
  }

  .recipe-img {
    box-sizing: border-box;
    width: min(100%, 35rem);
    margin: 0 auto;
  }
`