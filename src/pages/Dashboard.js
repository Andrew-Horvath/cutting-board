import React, {useState} from 'react';
import ContainerBackground from '../components/images/bg-board-pretzel.jpg';
import SearchForm from '../components/SearchForm';

function Dashboard () {
    const [pageTitle] = ['Cutting Board'];


    return (
        <section style={styles.container}>
           
               
        </section>
    );
}

export default Dashboard;

const styles = {
    container: {
        display: 'block',
        padding: '1rem',
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