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
    width: 15rem;
    background: rgba(8, 76, 97, 1);
    font-size: 1.8rem;
    font-weight: 700;
    color: rgba(153, 194, 77, 1);
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: rgba(8, 76, 97, 1);
        background: rgba(255, 188, 66, 1);
    }
`