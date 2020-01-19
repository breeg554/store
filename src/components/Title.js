import React from 'react';
import styled from 'styled-components';

const StyledHeadingWrapper = styled.div`
width: 100%;
text-align: center;
padding: 2rem 0;
font-size: 1.5rem;
h1{
    font-weight: bold;
}
strong{
    color: ${({ theme }) => theme.colors.lightBlue};
}
${({ theme }) => theme.mediaQ.medium}{
  font-size: 2rem;
}
${({ theme }) => theme.mediaQ.large}{
    font-size: 3rem;
    padding: 3rem 0;
  }
`

const Title = ({ name, title }) => {
    return (
        <StyledHeadingWrapper>
            <h1>{name} <strong>{title}</strong></h1>
        </StyledHeadingWrapper>
    );
}

export default Title;