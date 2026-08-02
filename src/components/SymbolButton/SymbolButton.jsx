import { StyledSymbolButton } from './SymbolButton.styles'

export const SymbolButton = ({ children, onClick }) => (
  <StyledSymbolButton onClick={onClick}>
    {children}
  </StyledSymbolButton>
)