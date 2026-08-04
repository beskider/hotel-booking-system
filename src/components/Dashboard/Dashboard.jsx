import { useState } from 'react'

import { StyledDashboard } from './Dashboard.styles'

import { MainBookingTable } from 'components/MainBookingTable/MainBookingTable'
import { TopBar } from 'components/TopBar/TopBar'

export const Dashboard = () => {
  
  const [ currentMonth, setCurrentMonth ] = useState(new Date().getMonth())
  const [ currentYear, setCurrentYear ] = useState(new Date().getFullYear())
  
  const setCurrentDate = () => {  
    setCurrentMonth(new Date().getMonth())
    setCurrentYear(new Date().getFullYear())    
  }
  const setPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }    
  }

  const setNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }     
  }
  
  return (
    <StyledDashboard>
      <header>
        <TopBar 
          currentMonth={currentMonth} 
          currentYear={currentYear} 
          setCurrentDate={setCurrentDate}
          setPrevMonth={setPrevMonth}
          setNextMonth={setNextMonth} 
        />
      </header>
      <main>
        <MainBookingTable month={currentMonth} year={currentYear}/>
      </main>
    </StyledDashboard>
  )
}