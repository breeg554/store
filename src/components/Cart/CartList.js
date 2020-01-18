import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

const StyledWrapper = styled.div`
width:100%;
`


const CartList = ({ value: { cart }, value }) => {

    return (
        <StyledWrapper>
            {cart.map(item => <CartItem key={item.id} item={item} value={value} />)}

        </StyledWrapper>
    );
}

export default CartList;