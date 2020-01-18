import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
text-transform: uppercase;
padding: 1rem 1.8rem;
display:flex;
flex-direction:column;
align-items:flex-end;
& >*{
    margin-bottom: 0.2rem;
}
h5{
    font-size: 1.3rem;
}
`
const StyledClearBtn = styled.button`
background-color: transparent;
padding: 0.6rem 2rem;
text-transform: uppercase;
color: ${({ theme }) => theme.colors.mainYellow};
border: 1px solid ${({ theme }) => theme.colors.mainYellow};
border-radius: 10px;
cursor:pointer;
transition:0.1s ease-in-out;
&:hover{
transform:scale(1.1);
}

`

const CarTotal = ({ value: { cartSubTotal, cartTax, cartTotal, clearCarts } }) => {
    return (
        <>
            <StyledWrapper>
                <Link to='/'>
                    <StyledClearBtn onClick={() => clearCarts()}>Clear all</StyledClearBtn>
                </Link>
                <h5>
                    Subtotal: <strong>${cartSubTotal}</strong>
                </h5>
                <h5>
                    Tax: <strong>${cartTax}</strong>
                </h5>
                <h5>
                    Total: <strong>${cartTotal}</strong>
                </h5>
            </StyledWrapper>
        </>
    );
}

export default CarTotal;