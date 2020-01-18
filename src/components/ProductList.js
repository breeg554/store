import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import styled from 'styled-components';


const StyledCartsWrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
display:flex;
justify-content:center;
flex-wrap: wrap;

// ${({ theme }) => theme.mediaQ.medium}{
//     grid-template-columns: 1fr 1fr;
//     // grid-column-gap: 2rem;
// }
`



class ProductList extends Component {
    state = {}
    render() {
        return (
            <section>
                <Title name='Our' title='Products' />
                <StyledCartsWrapper>
                    <ProductConsumer>
                        {(value) => {
                            return value.products.map(product => <Product key={product.id} product={product} />)
                        }}
                    </ProductConsumer>
                </StyledCartsWrapper>
            </section>
        );
    }
}

export default ProductList;