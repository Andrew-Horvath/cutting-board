import React, {useState} from 'react';
import ContainerBackground from '../components/images/bg-board-pretzel.jpg';
import SearchForm from '../components/SearchForm';
import SearchButton from '../components/ButtonStandard';

function Dashboard () {
    const [pageTitle] = ['Cutting Board'];


    return (
        <section style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>{pageTitle}</h1>
            </header>
                <SearchForm />
        </section>
    );
}

export default Dashboard;

const styles = {
    container: {
        display: 'block',
        padding: '1rem',
        background:  `linear-gradient(to bottom, rgba(255,255,255, 0), rgba(57,57,57,.65), rgba(143, 45, 86, 1)), url(${ContainerBackground}) center center`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        maxWidth: '50rem',
 
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