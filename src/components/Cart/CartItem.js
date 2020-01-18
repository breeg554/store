import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
max-width: 1200px;

margin: 0 auto 2rem auto;
display:block;
&>*{
    margin-bottom: 0.2rem;
}
div{
    // flex-grow: 1;
    text-align: center;
}
h5{
    font-size:1rem;
}
${({ theme }) => theme.mediaQ.medium}{
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom: 0;
    &>*{
        width:140px;
        max-width: 140px;
    }
   
}

`
const StyledQuantityWrapper = styled.div`
display:flex;
justify-content:center;
span:nth-of-type(1),span:nth-of-type(3){
    cursor:pointer;
}
span:hover:nth-of-type(1),span:hover:nth-of-type(3){
    color: #fff;
    background-color: ${({ theme }) => theme.colors.mainDark};
    transform: scale(1.1);
}
`
const StyledBtnQuantity = styled.span`
display:block;
margin: 0.1rem;
width: 1.5rem;
height:1.5rem;
border: 1px solid ${({ theme }) => theme.colors.mainDark};
transition: 0.1s ease-in-out;

`
const StyledRemoveBtnContainer = styled.div`
cursor:pointer;
color:${({ theme }) => theme.colors.mainYellow};
display: inline-block;
transition: 0.1s ease-in-out;
&:hover{
    transform:scale(1.2);
}
`
const CartItem = ({ item: { id, img, price, title, count, total }, value: { increment, decrement, removeItem } }) => {
    return (
        <StyledWrapper>
            <div>
                <img src={img} alt={title} style={{ width: "5rem", height: "5rem" }} />
            </div>
            <div>
                <h5>Product: {title}</h5>
            </div>
            <div>
                <p>Price: ${price}</p>
            </div>
            <StyledQuantityWrapper>
                <StyledBtnQuantity onClick={() => increment(id)}>+</StyledBtnQuantity>
                <StyledBtnQuantity >{count}</StyledBtnQuantity>
                <StyledBtnQuantity onClick={() => decrement(id)}>-</StyledBtnQuantity>
            </StyledQuantityWrapper>
            <div>
                <StyledRemoveBtnContainer onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </StyledRemoveBtnContainer>
            </div>
            <div>
                <strong>Item total: ${total}</strong>
            </div>
        </StyledWrapper>
    );
}

export default CartItem;