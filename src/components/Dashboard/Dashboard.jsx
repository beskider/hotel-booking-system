import { useState } from 'react'
import { DashboardHeader, StyledDashboard } from './Dashboard.styles'
import { StyledButton } from 'components/Button/Button.styles'

export const Dashboard = () => {
  
  const [ currentDate, setCurrentDate ] = useState(new Date())
  


  
  return (
    <StyledDashboard>
      <header>
        <DashboardHeader>
          <StyledButton onClick={null}>Press button</StyledButton>
        </DashboardHeader>

      </header>
    </StyledDashboard>
  )
}