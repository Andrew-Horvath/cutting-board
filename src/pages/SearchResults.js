import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


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
    
    if (loading) return <p style={styles.loadingStyle}>'Loading...'</p>;
    if (err) return "Error!";
      
  return (
    <div>
        {userSearch.map (data => (
          <div key={data.id}>
              <h3 style={styles.h3}>{data.title}</h3>
                <p><img src={data.image} alt='recipe finished product' /></p>
          </div>
        ))}

        {/* {!loading && userData.length > 0 ? userData.map(user => {
          const {} = user;
          return 
        }) : null
      } */}
    </div>
  )
}
export default SearchResults;

const styles = {
    loadingStyle: {
        fontSize: '3rem',
        color: 'rgba(126, 217, 87, 1)',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    h3: {
        fontSize: '2rem',
        fontFamily: 'Roboto Slab',
        textTransform: 'uppercase',
        color: 'white',
    },

}