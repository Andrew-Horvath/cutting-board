import React from 'react';

function Cuisine() {
    return (
        <div style={styles.container}>
            <h1 style={styles.pageTitle}>Search by Cuisine</h1>
            <p style={styles.pageContent}>This is where you would search by Cuisine, but its not here yet</p>
        </div>
    );
}

export default Cuisine;

const styles = {
    container: {
        background: 'black',
        padding: '1rem',
    },
    pageTitle: { 
        fontSize: '2rem',
        color: 'rgba(153, 194, 77,1)',
    },
    pageContent: {
        fontSize: '1.4rem',
        color: 'rgba(241, 143, 1, 1)'
    }
    
}