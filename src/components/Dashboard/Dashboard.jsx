import { useState } from 'react'

import { DashboardHeader, StyledDashboard } from './Dashboard.styles'

import { TextButton } from 'components/TextButton/TextButton'
import { SymbolButton } from 'components/SymbolButton/SymbolButton'
import { Spacer } from 'components/Spacer/Spacer'
import { MonthLabel } from 'components/MonthLabel/MonthLabel'
import { MainBookingTable } from 'components/MainBookingTable/MainBookingTable'

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
        <DashboardHeader>
          <TextButton onClick={setCurrentDate}>Dzisiaj</TextButton>
          <Spacer size={3}/>
          <SymbolButton onClick={setPrevMonth}>&lt;</SymbolButton>
          <SymbolButton onClick={setNextMonth}>&gt;</SymbolButton>          
          <Spacer size={1}/>
          <MonthLabel 
            month={currentMonth} 
            year={currentYear}
            setPrevMonth={setPrevMonth}
            setNextMonth={setNextMonth}
          />
          <Spacer size={1}/>
          {/* <IconButton onClick={() => {}}><CalendarClock  /></IconButton>        */}
        </DashboardHeader>
      </header>
      <main>
        <MainBookingTable month={currentMonth} year={currentYear}/>
      </main>
    </StyledDashboard>
  )
}