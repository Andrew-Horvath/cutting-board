import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const sideNav = props => {
    return (
        <nav style={styles.navContainer}>
            <LinkStyled to="/settingChart">{<Avatar AvatarIcon={AvatarImageURL} />}</LinkStyled>
         
        </nav>
    )
}
export default sideNav;

const styles = {
    navContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '1.5rem',
        background: 'none',
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

    &:hover {
        color: rgba(247, 100, 107, 1);
    }
`