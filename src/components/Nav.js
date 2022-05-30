import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './ButtonStandard';

const MainNav = props => {
    return (
        //main navigation for each view. mimics tabs as all content loads in same element
        <nav style={styles.navContainer}>
            {/* links that link to each individual page. */}
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
    // had extra styling here, but moved it to a different component. left styled applied in instance media query is necessary.
`