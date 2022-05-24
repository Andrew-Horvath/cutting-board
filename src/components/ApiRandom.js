import React, { useState, useEffect } from 'react';

// import RecipeCard from './components/RecipeCard';

function ApiGet() {
  const [userSearch, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();
  const apiPath = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=';
  const apiKey = '4fdab9234b0245be8581462069bd738f'

  useEffect(() => {
      console.log('UseEffect');

      fetch(`${apiPath}${apiKey}&ingredients=apples&number=10`)
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
    }, []);
    
    if (loading) return <p style={styles.loadingStyle}>'Loading...'</p>;
    if (err) return "Error!";
      
  return (
    <div>
      <h1 style={styles.title}>Testing Header</h1>
      <h2 style={styles.h2}>{loading}</h2>
     
      <div>
         
        {userSearch.map (data => (
          <div><h3>{data.title}</h3>
          <p><img src={data.image} alt='recipe finished product' /></p>
          </div>
        ))}
      </div>
        {/* {!loading && userData.length > 0 ? userData.map(user => {
          const {} = user;
          return 
        }) : null
      } */}
    </div>
  )
}
export default ApiGet;

const styles = {
    loadingStyle: {
        fontSize: '3rem',
        color: 'rgba(126, 217, 87, 1)',
    },
    h1: {
        fontSize: '3rem',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '5rem',
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        color: 'rgba(126, 217, 87, 1)',
    },
    content: {
        fontFamily: 'Montserrat',
        fontSize: '2.25rem',
        color: 'rgba(255, 235, 245, 1)',
        width: '75rem',
        marginTop: '2rem',
    }
}