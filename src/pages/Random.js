import React from 'react';

function Random() {
    return (
        <div style={styles.container}>
            <h1>Get a Random Recipe</h1>
            <p>This is where you would be sent a random recipe, but its not here yet</p>
        </div>
    );
}

export default Random;

const styles = {
    container: {
        background: 'black',
        color: 'green',
    }
}