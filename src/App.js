import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './utils/theme';
import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Error from './components/Error';
import Modal from './components/Modal';


const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Oswald', sans-serif;
    }
    body{
      
      background-color: ${({ theme }) => theme.colors.mainWhite};
      color:  ${({ theme }) => theme.colors.mainDark};
    }
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar />
        <Switch>
          <Route exact path='/' component={ProductList}></Route>
          <Route path='/details' component={Details}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route component={Error}></Route>
        </Switch>
        <Modal />
      </>
    </ThemeProvider>
  );
}

export default App;
