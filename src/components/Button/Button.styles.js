import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: transparent;
  padding: 0.2rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.blue};
  border-radius: 2px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.blueHover};
    transition: background-color 100ms ease-in; 
  }

  &:active {     
    background-color: ${({ theme }) => theme.colors.blueActive};
    color: ${({ theme }) => theme.colors.white}; 
  }

`
