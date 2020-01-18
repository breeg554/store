import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import styled from 'styled-components';
import { StyledButton } from './Button';
import { Link } from 'react-router-dom';


const ModalContainer = styled.div`

display:flex;
justify-content:center;
align-items:center;
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
background-color: rgba(0,0,0,0.5);
a{
    text-decoration: none;
}
img{
    max-width: 100%;
}
div{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 2rem 1rem;
    width:70%;
    max-width: 300px;
    overflow:hidden;
    background-color:${({ theme }) => theme.colors.mainWhite};
    border-radius: 20px;
    button{
        margin-top: 0.5rem;
    }
}

`

class Modal extends Component {
    state = {}
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div>
                                    <img src={img} alt={title} />
                                    <h3>{title}</h3>
                                    <p>Price: ${price}</p>
                                    <Link to='/'>
                                        <StyledButton onClick={() => closeModal()}>Continue shopping</StyledButton>
                                    </Link>
                                    <Link to='/cart'>
                                        <StyledButton cart onClick={() => closeModal()}>Go to cart</StyledButton>
                                    </Link>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;