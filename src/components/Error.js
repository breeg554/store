import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
padding-top: 3rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
h1{
    font-size:3rem;
}
h2{
    font-size: 2rem;
}
h3{
    font-size:1.5rem;
}
span{
    color: red;
}
`

class Error extends Component {
    state = {}
    render() {
        return (
            <StyledWrapper>
                <h1>404</h1>
                <h1>Error</h1>
                <h2>Page not found</h2>
                <h3>URL <span>{this.props.location.pathname}</span> not found</h3>
            </StyledWrapper>
        );
    }
}

export default Error;