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
    height: 4rem;
    width: 16rem;
    padding: 1rem;
    background: rgba(8, 76, 97, 1);
    font-size: 1.6rem;
    font-weight: 700;
    color: rgba(153, 194, 77, 1);
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: #99c24d;
        background: #d81159;
    }
`