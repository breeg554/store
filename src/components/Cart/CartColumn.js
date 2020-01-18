import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
max-width: 1200px;
margin: 0 auto 1rem auto;
display:none;
text-align:center;
${({ theme }) => theme.mediaQ.medium}{
    display:flex;
    align-items:center;
    justify-content: space-between;

    &>*{
        width:140px;
        max-width: 140px;
        text-transform:uppercase;
    }
}

`

const CartColumn = () => {
    return (
        <StyledWrapper>
            <div>
                <p>Product</p>
            </div>
            <div>
                <p>Name of product</p>
            </div>
            <div>
                <p>Price</p>
            </div>
            <div>
                <p>Quantity</p>
            </div>
            <div>
                <p>Remove</p>
            </div>
            <div>
                <p>Total</p>
            </div>
        </StyledWrapper>
    );
}

export default CartColumn;