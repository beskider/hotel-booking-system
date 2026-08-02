import styled from 'styled-components'

export const StyledSymbolButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 0.2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.yaleBlue};
  cursor: pointer;
  font-weight: 800;
    
  &:hover {
    color: ${({ theme }) => theme.colors.black};
    transition: color 150ms ease-in; 
  }
  
  &:active {     
    color: ${({ theme }) => theme.colors.mainGray};
  }  
`



