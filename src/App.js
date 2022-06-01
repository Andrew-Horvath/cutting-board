import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Cuisine from './pages/Cuisine';
import Ingredient from './pages/Ingredient';
import Random from './pages/Random';
import SearchResults from './pages/SearchResults'
import MainNav from './components/Nav';
import Header from './components/MainHeader';

function App() {

  return (
    // main setup for app. sets routes for navigation and adds the header component.
    <div id='app-main-div'>
      <main style={styles.containerMain}>
        
          <Header />
              <MainNav />
        <section className='app-section-container'>
                <Routes>
                  <Route path='/' element={<Dashboard />} />
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
    width: '100%',
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
