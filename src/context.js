import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: storeProducts,
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tmpProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tmpProducts = [...tmpProducts, singleItem];

        })
        this.setState(() => {
            return { products: tmpProducts };
        })
    }
    getProduct = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    handleDetail = (id) => {
        const product = this.getProduct(id);
        this.setState(() => {
            return { detailProduct: product };
        })
    }
    addToCart = (id) => {
        let tmpProducts = [...this.state.products];
        const index = tmpProducts.indexOf(this.getProduct(id));
        const product = tmpProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState({
            products: tmpProducts,
            cart: [...this.state.cart, product]
        }, () => console.log(this.state));
    }
    openModal = (id) => {
        const product = this.getProduct(id);
        this.setState({
            modalProduct: product,
            modalOpen: true
        })
    }
    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }
    increment = (id) => {
        console.log("increment");
    }
    decrement = (id) => {
        console.log("decrement");
    }
    removeItem = (id) => {
        console.log("remove");
    }
    clearCarts = () => {
        console.log("clear");
    }

    render() {
        return (
            <ProductContext.Provider value={
                {
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCarts: this.clearCarts
                }
            }>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };