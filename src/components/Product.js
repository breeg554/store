import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
const SingleProduct = styled.section`
position: relative;
overflow: hidden;
padding: 2rem 0;
margin: 1rem 1rem;
background-color: #fff;

max-width: 250px;
text-align: center;
transition: 0.1s ease-in-out;
border: 0.04rem solid transparent;


&:hover{
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
}

&:hover  button{
   right: 0;
}
&:hover div{
    transform: scale(1.1);
}

`
const StyledImgWrapper = styled.div`
transition: all 0.1s ease-in-out;
img{
    display: block;
    margin: 0 auto 0.5rem auto;
    width: 50%; 
}

`

const StyledTitle = styled.h3`
margin-top: 2rem;
font-weight: 400;
`
const StyledAddToCart = styled.button`
cursor: pointer;
position:absolute;
top:0;
right:-80%;
padding: 5px 10px;
border:none;
border-radius: 5px;
background:${({ theme }) => theme.colors.mainDark};
color:${({ theme }) => theme.colors.mainWhite};
transition: right 0.2s ease-in-out , transform 0.1s ease-in-out;
&:disabled{
    background-color:gray;
}
&:hover{
    transform:scale(1.1);
}
`


class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductConsumer>
                {(value) => (
                    <SingleProduct>


                        <StyledImgWrapper onClick={() => value.handleDetail(id)}>
                            <Link to="/details"><img src={img} alt="Single phone" /></Link>
                        </StyledImgWrapper>
                        <StyledAddToCart disabled={inCart ? true : false} onClick={() => {
                            value.addToCart(id);
                            value.openModal(id);
                        }}>
                            {inCart ? "In Cart" : "Buy"}
                        </StyledAddToCart>


                        <StyledTitle>{title}</StyledTitle>
                        <p>$ {price}</p>
                    </SingleProduct>
                )}
            </ProductConsumer>
        );
    }
}


Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}


export default Product;