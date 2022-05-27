import React from 'react';
import SearchForm from '../components/SearchForm';

function Ingredient() {
    return (
        <div style={styles.container}>
            <SearchForm />
        </div>
    );
}

export default Ingredient;

const styles = {
    container: {
    background: 'rgba(41, 41, 41, .7)',
    padding: '2rem',
    width: '75%',
    height: '100vh',
    borderRadius: '1rem',
    }
}