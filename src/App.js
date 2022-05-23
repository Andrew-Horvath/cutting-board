import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import API from './components/ApiGet';
import ApiGet from './components/ApiGet';

function App() {
  return (
    <div className="App">
      <main style={styles.container}>
         <Dashboard />
         
      </main>
    </div>
  );
}

export default App;

const styles = {
  container: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // padding: '0 1rem',
  
  },

}
