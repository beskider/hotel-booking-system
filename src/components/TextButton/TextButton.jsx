import { StyledTextButton } from './TextButton.styles'

export const TextButton = ({ children, onClick }) => (
  <StyledTextButton onClick={onClick}>
    {children}
  </StyledTextButton>
)