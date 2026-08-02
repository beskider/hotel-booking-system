import { StyledIconButton } from './IconButton.styles'

export const IconButton = ({ children, onClick }) => (
  <StyledIconButton onClick={onClick}>
    {children}
  </StyledIconButton>
)