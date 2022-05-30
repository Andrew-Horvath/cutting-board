import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './ButtonStandard';

const MainNav = props => {
    return (
        <nav style={styles.navContainer}>
            <LinkStyled to="/ingredient"><Button btnText='by ingredient' /></LinkStyled>
            <LinkStyled to="/cuisine"><Button btnText='by cuisine' /></LinkStyled>
            <LinkStyled to="/random"><Button btnText='Random Recipe' /></LinkStyled>
        </nav>
    )
}
export default MainNav;

const styles = {
    navContainer: {
        display: 'flex',
        justifyContent: 'center',

    }
}

const LinkStyled = styled(Link)`
    
`