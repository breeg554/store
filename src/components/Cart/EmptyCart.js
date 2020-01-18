import React from 'react';
import styled from 'styled-components'

const StyledWrapper = styled.div`
margin-top:2rem;
h1{
    text-transform: uppercase;
    font-size: 2rem;
    text-align:center;
}
`

const EmptyCart = () => {
    return (
        <StyledWrapper>
            <h1>Your cart is currently empty</h1>
        </StyledWrapper>
    );
}

export default EmptyCart;