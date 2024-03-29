import React from 'react';

function Dashboard () {
    
    return (
        //Web app entry page greeting, name and tagline. Also direction on next step
        <section style={styles.container} className="dashboard-section-container">
           <h1 style={styles.h1}>Welcome to Cutting Board</h1>
           <h3 style={styles.h3}>The place to begin Cooking!</h3>
           <p style={styles.p} className='dashboard-text'>Select an option from above to begin your cooking adventure!</p>
        </section>
    );
}

export default Dashboard;

const styles = {
    // setting up the styling and formatting of main display page. Also styling the page content.
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1rem 1rem 5rem 1rem',
        height: '100%',
        maxWidth: '70rem',
        background: 'rgba(8, 76, 97, 1)',
        margin: '2rem auto 0',
    },
    h1: {
        fontFamily: 'Roboto Slab',
        fontSize: '4rem',
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: '1',
        color: 'rgba(241, 143, 1, 1)',
        margin: '3rem 0 0 0',
    },
    h3: {
        fontFamily: 'Roboto',
        fontSize: '2rem',
        fontWeight: '400',
        textAlign: 'center',
        color: 'rgba(153, 194, 77, 1)',
        margin: '1.5rem 0 0 0',
    },
    p: {
        fontFamily: 'Roboto',
        fontSize: '1.6rem',
        fontWeight: '400',
        color: 'rgba(217, 244, 252, 1)',
        margin: '2rem auto 0',
        width: '75%',
    }


}