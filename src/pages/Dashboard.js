import React, {useState} from 'react';
import ContainerBackground from '../components/images/bg-table-setting.jpg';

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
        padding: '1rem',
        background:  `linear-gradient(to bottom, rgba(255,255,255, 0), rgba(57,57,57,.65), rgba(143, 45, 86, 1)), url(${ContainerBackground}) center center`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '90vh',
 
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '50rem',
    },
    title: {
        fontFamily: 'Roboto Slab',
        fontWeight: '600',
        fontSize: '4rem',
        textTransform: 'uppercase',
        color: 'rgba(255, 169, 10, 1)',
        margin: '0 0 1rem 0rem',
    },

}