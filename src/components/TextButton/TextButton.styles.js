import styled from 'styled-components'

export const StyledTextButton = styled.button`
  background-color: transparent;
  padding: 0.2rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.yaleBlue};
  color: ${({ theme }) => theme.colors.yaleBlue};
  border-radius: 2px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.yaleBlueBright};
    transition: background-color 150ms ease-in; 
  }

  &:active {     
    background-color: ${({ theme }) => theme.colors.yaleBlueDim};
    color: ${({ theme }) => theme.colors.white}; 
  }

`
