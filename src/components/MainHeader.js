import React from 'react';
import styled from 'styled-components';
import Logo from './images/logo_cuttingBoard.jpg';
import ButtonHome from './ButtonHome';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const MainHeader = () => {
    return (
        <header style={styles.mainHeader}>
            <div style={styles.logoWrapper}>
                    <img style={styles.imageLogo} src={Logo} alt='some alt text for logo here' />
                <StyledH1 className='company-title'>Cutting Board</StyledH1>
            </div>
            <nav style={styles.rightNav}>
               <Link to='/'><ButtonHome btnText={<IoHome />} /></Link>
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
    rightNav: {
        marginRight: '2%',
    },

}

const StyledH1 = styled.h1 `
        font-family: Roboto Slab;
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 1.1;
        text-transform: uppercase;
        color: rgba(241, 143, 1, 1);
        margin: 0 0 0 3rem;

        @media (min-width: 600px) {
            font-size: 3.5rem;
            margin: 0 0 0 4rem;
        }


`