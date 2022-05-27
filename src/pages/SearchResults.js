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
    <RecipesStyled>
        {userSearch.map (data => (
          <div key={data.id} className="recipe-card">
              <h3 style={styles.h3}>{data.title}</h3>
                <p><img className='recipe-img' src={data.image} alt='recipe finished product' /></p>
          </div>
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
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    h3: {
        width: '45%',
        fontSize: '2rem',
        fontFamily: 'Roboto Slab',
        textTransform: 'uppercase',
        color: 'white',

        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },

}

const RecipesStyled = styled.div `
        height: 100vh;
        margin: 0 auto;
        padding: 2rem;
        display: flex;
        justify-content: space-evenly;
        gap: 2rem 2rem;
        flex-wrap: wrap;
        width: 75%;
        background: red;

  .recipe-card {
    width: calc(100% / 2 - 2rem);
    flex: 1 1 0;
    background: blue;
    padding: 1rem;
  }

  .recipe-img {
    width: 25rem;
  }
`