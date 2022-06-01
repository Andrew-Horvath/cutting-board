import React from 'react'
import styled from 'styled-components';

//standard button component
const ButtonSearch = props => {
    return (
        <Search>
            {props.btnText}
        </Search>

    )
}
export default ButtonSearch

const Search = styled.button`
    height: 4.8rem;
    width: 12rem;
    background: rgba(241, 143, 1, 1);
    font-size: 1.4rem;
    font-weight: 700;
    color: rgba(8, 76, 97, 1);
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    &:hover {
        color: #99c24d;
        background: #d81159;
    }

    @media (min-width: 500px) {
        padding: 1rem;
        font-size: 1.6rem;
        width: 16rem;
        margin: 0 .1rem;
    }

    @media (min-width: 600px) {
        padding: 1rem;
        font-size: 1.8rem;
        width: 18rem;
        margin: 0 .5rem;
    }
`