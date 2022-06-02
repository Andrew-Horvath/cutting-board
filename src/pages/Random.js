import React from 'react';

function Random() {
      const apiPath = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=';
  const apiKey = '4fdab9234b0245be8581462069bd738f';


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

export default Random;

const styles = {
    container: {
        background: 'black',
        color: 'green',
    }
}