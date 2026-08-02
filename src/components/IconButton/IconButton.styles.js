import styled from 'styled-components'

export const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 0.2rem;  
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  color: ${({ theme }) => theme.colors.yaleBlue};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
   
  &:hover {
    color: ${({ theme }) => theme.colors.black};
    transition: color 150ms ease-in; 
  }
  
  &:active {     
    color: ${({ theme }) => theme.colors.mainGray};
  } 

`
