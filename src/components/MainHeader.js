import React from 'react';
import styled from 'styled-components';
import Logo from './images/logo_cuttingBoard.jpg';
import Button from './ButtonStandard';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <header style={styles.mainHeader}>
            <div style={styles.logoWrapper}>
                    <img style={styles.imageLogo} src={Logo} alt='some alt text for logo here' />
                <h1 style={styles.companyTitle}>Cutting Board</h1>
            </div>
            <nav style={styles.rightNav}>
               <Link to='/'><Button style={styles.homeBtn} btnText='Home' /></Link>
            </nav>
        </header>
    )
}
export default MainHeader

const styles = {
    mainHeader: {
        boxSizing: 'border-box',
        padding: '1.5%',
        background: 'rgba(8, 76, 97, 1)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '1px 6px 10px 3px rgba(8, 76, 97, .4)',
        marginBottom: '2rem',
    },
    logoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '10%',
    },
    imageLogo: {
        width: '100px',
        height: '100px',
    },
    companyTitle: {
        fontFamily: 'Roboto Slab',
        fontSize: '1.8rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        color: 'rgba(241, 143, 1, 1)',
        marginLeft: '1rem',
    },
    rightNav: {
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        // marginRight: '2%',
    },
}