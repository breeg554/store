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
    color: ${({ theme }) => theme.colors.mainBlue};
}
${({ theme }) => theme.mediaQ.medium}{
  font-size: 2rem;
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