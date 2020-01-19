import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        howManyProducts: 0
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
            cart: [...this.state.cart, product],
            howManyProducts: this.state.howManyProducts + 1
        }, () => this.addTotals());
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
        let tmpCart = [...this.state.cart];
        const index = tmpCart.indexOf(this.getProduct(id));
        const product = tmpCart[index];
        product.count = product.count + 1;
        product.total = product.price * product.count;

        this.setState({
            cart: [...tmpCart]
        }, () => this.addTotals())
    }
    decrement = (id) => {
        let tmpCart = [...this.state.cart];
        const index = tmpCart.indexOf(this.getProduct(id));
        const product = tmpCart[index];
        product.count = product.count - 1;


        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.price * product.count;
            this.setState({
                cart: [...tmpCart]
            }, () => this.addTotals())
        }
    }
    removeItem = (id) => {
        let tmpProducts = [...this.state.products];
        let tmpCart = [...this.state.cart];

        tmpCart = tmpCart.filter(item => item.id !== id);

        const index = tmpProducts.indexOf(this.getProduct(id));
        let removedProduct = tmpProducts[index];
        removedProduct.inCart = false;
        removedProduct.total = 0;
        removedProduct.count = 0;

        this.setState({
            cart: [...tmpCart],
            products: [...tmpProducts],
            howManyProducts: this.state.howManyProducts - 1
        }, () => this.addTotals())
    }
    clearCarts = () => {
        this.setState({
            cart: [],
            howManyProducts: 0
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => subTotal += item.total);

        const tmpTax = subTotal * 0.1;
        const tax = parseFloat(tmpTax).toFixed(2);

        const total = subTotal + tmpTax;

        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        })
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