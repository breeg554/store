import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';
import { StyledButton } from './Button';
import { ProductConsumer } from '../context';

const StyledNav = styled.nav`
    padding: 2rem 2rem;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.mainBlue};

    ul{
        
        list-style: none;
        flex-grow: 1;
        margin: 0 2rem;
        
    }
    a{
        color: ${({ theme }) => theme.colors.mainWhite};
        text-decoration: none;
        text-transform: uppercase;
    }
    i:nth-of-type(1){
        font-size:2rem;
    }
   

`

const StyledCounter = styled.span`
position:absolute;
top:-0.3rem;
left:-0.7rem;
line-height:1.5rem;
width:1.5rem;
height:1.5rem;
border-radius: 10px;
color:${({ theme }) => theme.colors.mainDark};
background-color: ${({ theme }) => theme.colors.mainWhite};
`



class NavBar extends Component {
    state = {}
    render() {
        return (
            <StyledNav>
                <Link to='/'>
                    <i className="fas fa-mobile-alt"></i>
                </Link>
                <ul>
                    <li>
                        <Link to='/'>
                            Products
                        </Link>
                    </li>
                </ul>
                <ProductConsumer>
                    {value => (
                        <Link to='/cart'>
                            <StyledButton>
                                <span><i className="fas fa-cart-plus"></i></span>
                                <span>My cart</span>
                                <StyledCounter>{value.howManyProducts}</StyledCounter>
                            </StyledButton>
                        </Link>
                    )}
                </ProductConsumer>
            </StyledNav>
        );
    }
}

export default NavBar;