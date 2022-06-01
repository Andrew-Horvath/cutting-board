import React from 'react'
import styled from 'styled-components';

//standard button component
const ButtonStandard = props => {
    return (
        <Standard>
            {props.btnText}
        </Standard>

    )
}
export default ButtonStandard

const Standard = styled.button`
    height: 4.8rem;
    width: 12rem;
    background: rgba(8, 76, 97, 1);
    font-size: 1.4rem;
    font-weight: 700;
    color: rgba(153, 194, 77, 1);
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