import React, { Component } from 'react';
import Title from '../Title';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CarTotal from './CarTotal';
import { ProductConsumer } from '../../context';


class Cart extends Component {
    state = {}
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <>
                                    <Title name='Yours' title='Cart' />
                                    <CartColumn />
                                    <CartList value={value} />
                                    <CarTotal value={value} history={this.props.history} />
                                </>
                            )
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>


            </section>
        );
    }
}

export default Cart;