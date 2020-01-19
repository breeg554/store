import styled from 'styled-components';


export const StyledButton = styled.button`
position:relative;
display:flex;
justify-content: center;
align-items:center;
padding: 0.3rem 1rem;
background-color: transparent;

cursor: pointer;
border: 1px solid ${({ theme }) => theme.colors.lightBlue};
border-color: ${props => props.cart ? ({ theme }) => theme.colors.mainYellow : ({ theme }) => theme.colors.lightBlue};
border-radius: 5px;
color: ${props => props.cart ? ({ theme }) => theme.colors.mainYellow : ({ theme }) => theme.colors.lightBlue};
transition: all 0.1s ease-in-out;

 
:hover{
     background-color: ${({ theme }) => theme.colors.mainWhite};
     border-color: ${({ theme }) => theme.colors.mainBlue};
     color: ${({ theme }) => theme.colors.mainBlue};
     transform: scale(1.1);
}


 span:nth-of-type(1){
     font-size: 1.2rem;
 }
 span:nth-of-type(2){
     font-size: 0.8rem;
     text-transform: uppercase;
 }

`