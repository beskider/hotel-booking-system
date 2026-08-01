import { StyledButton } from './Button.styles'

export const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
)