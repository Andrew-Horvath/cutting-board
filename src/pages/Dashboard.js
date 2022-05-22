import React, {useState} from 'react';

function Dashboard () {
    const [pageTitle] = ['Cutting Board'];


    return (
        <section style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>{pageTitle}</h1>
            </header>
                <p>This is where I will put a form.</p>
        </section>
    );
}

export default Dashboard;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        fontFamily: 'Roboto Slab',
        background: 'rgba(17, 66, 64, 1)',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: '1rem',
        marginBottom: '3rem',
        width: '100%',
        height: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: '5rem',
        textTransform: 'uppercase',
        color: 'rgba(255, 188, 66, 1)',
        // margin: '0 0 1rem 1rem',
    },

}