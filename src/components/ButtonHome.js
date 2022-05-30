import React from 'react'
import styled from 'styled-components';


//standard button component
const ButtonHome = props => {
    return (
        <Standard>
            {props.btnText}
        </Standard>

    )
}
export default ButtonHome

const Standard = styled.button`
    height: 4rem;
    width: 4rem;
    padding: 0.5rem 0 0 0;
    background: rgba(8, 76, 97, 1);
    font-size: 2.8rem;
    font-weight: 700;
    color: rgba(153, 194, 77, 1);
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        color: #d81159;
        background: rgba(153, 194, 77, 1);
    }

    @media (max-width: 475px) {
        
    }
`