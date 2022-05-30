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
              <h3 className='recipe-title'>{data.title}</h3>
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
}

const RecipesStyled = styled.div `
        box-sizing: border-box;
        height: 100%;
        padding: 2rem;
    
  .recipe-card {
    padding: 1.5rem;
    background: rgba(241, 143, 1, .8);
    margin: 0 0 2rem 0;
    
  }

  .recipe-title {
    font-family: 'Roboto Slab', 'Roboto';
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(8, 76, 97, 1);
    width: 50%;
    margin: 0 0 1rem 0;
     
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .recipe-img {
    width: min(75%, 20rem);
  }
`