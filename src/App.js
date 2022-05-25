import { Routes, Route } from 'react-router-dom';
import Cuisine from './pages/Cuisine';
import Ingredient from './pages/Ingredient';
import Random from './pages/Random';
import SearchResults from './pages/SearchResults'
import MainNav from './components/Nav';

import ContainerBackground from './components/images/bg-board-pretzel.jpg';



function App() {

  const [pageTitle] = ['Cutting Board'];

  return (
    <div>
      <main style={styles.containerMain}>
        <section style={styles.container}>
          
            <header style={styles.header}>
                <h1 style={styles.title}>{pageTitle}</h1>
            </header>
              <MainNav />
                <Routes>
                  <Route path='ingredient' element={<Ingredient />} />
                  <Route path='cuisine' element={<Cuisine />} />
                  <Route path='random' element={<Random />} />
                  <Route path='searchResults/:query' element={<SearchResults />} />
                </Routes>
               
        </section>
         
         
      </main>
    </div>
  );
}

export default App;

const styles = {
  containerMain: {

  },

  container: {
        padding: '1rem',
        background:  `linear-gradient(to bottom, rgba(255,255,255, 0), rgba(57,57,57,.65), rgba(143, 45, 86, 1)), url(${ContainerBackground}) center center`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        width: '60rem',
 
    },
    header: {
        margin: '5rem 0 0 0',
    },

    title: {
        fontFamily: 'Roboto Slab',
        fontWeight: '600',
        fontSize: '4rem',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'rgba(241, 143, 1, 1)',
    },

}
