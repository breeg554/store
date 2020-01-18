import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { StyledButton } from './Button';
import styled from 'styled-components';
import Title from './Title';

const StyledSection = styled.section`
max-width: 860px;
margin: 0 auto;
padding: 1rem;
a{
    text-decoration:none;
}
`
const StyledImgWrapper = styled.div`
overflow: hidden;
img{
    display:block;
    max-width: 100%;
    margin: 0 auto;
}
`
const StyledArticle = styled.article`
display:flex;
flex-direction:column;
${({ theme }) => theme.mediaQ.medium}{
    flex-direction:row;
    &>div{
        max-width: 50%;
    }
}
`
const StyledBtnsWrapper = styled.div`
display:flex;
margin-top:1rem;
button:nth-of-type(1){
    margin-right: 1rem;
}
`

const StyledAboutWrapper = styled.div`
h2{
    margin-top:2rem;
    font-size: 1.6rem;
}
h3{
    text-transform: uppercase;
    color: gray;
    font-size: 1.3rem;
}
p:nth-of-type(1){
    color:${({ theme }) => theme.colors.mainBlue};
}
p:nth-of-type(1),p:nth-of-type(2){
   font-weight:bold; 
}
p:nth-of-type(2){
    margin-top: 0.2rem;
}
p:nth-of-type(3){
    color: gray;
 }
`
class Details extends Component {
    state = {}
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, title, img, price, info, company, inCart } = value.detailProduct;
                    return (
                        <StyledSection>
                            <div>
                                <Title name={title} />
                            </div>
                            <StyledArticle>
                                <StyledImgWrapper>
                                    <img src={img} alt={title} />
                                </StyledImgWrapper>
                                <StyledAboutWrapper>
                                    <h2>Model: {title}</h2>
                                    <h3>Made by: {company}</h3>
                                    <p>Price: ${price}</p>
                                    <p>Some info about product:</p>
                                    <p>{info}</p>
                                    <StyledBtnsWrapper>
                                        <Link to='/'>
                                            <StyledButton>Back to products</StyledButton>
                                        </Link>
                                        <StyledButton cart onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }} disabled={inCart ? true : false}>{inCart ? 'In cart' : 'Add to cart'}</StyledButton>
                                    </StyledBtnsWrapper>
                                </StyledAboutWrapper>
                            </StyledArticle>
                        </StyledSection>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;