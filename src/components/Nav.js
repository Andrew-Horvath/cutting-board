import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './ButtonStandard';

const MainNav = props => {
    return (
        <nav style={styles.navContainer}>
            <LinkStyled to="/ingredient"><Button btnText='ingredient' /></LinkStyled>
            <LinkStyled to="/cuisine"><Button btnText='cuisine' /></LinkStyled>
            <LinkStyled to="/random"><Button btnText='Random Recipe' /></LinkStyled>
        </nav>
    )
}
export default MainNav;

const styles = {
    navContainer: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        background: 'none',
        width: '40rem',
    }
}

const LinkStyled = styled(Link)`
    height: 5rem;
    width: 5rem;
    background: none;
    font-size: 3.5rem;
    font-weight: 700;
    color: rgba(37, 68, 65, 1);
    text-transform: uppercase;
    border: none;
    cursor: pointer;  
`