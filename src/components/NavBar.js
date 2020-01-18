import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';
import { StyledButton } from './Button';

const StyledNav = styled.nav`
    padding: 1rem 2rem;
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
    }

`



class NavBar extends Component {
    state = {}
    render() {
        return (
            <StyledNav>
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
                <ul>
                    <li>
                        <Link to='/'>
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart'>
                    <StyledButton>
                        <span><i className="fas fa-cart-plus"></i></span>
                        <span>My cart</span>
                    </StyledButton>
                </Link>
            </StyledNav>
        );
    }
}

export default NavBar;