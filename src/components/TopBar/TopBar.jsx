import { DashboardHeader, LeftGroup, RightGroup } from './TopBar.styles'

import { TextButton } from 'components/TextButton/TextButton'
import { SymbolButton } from 'components/SymbolButton/SymbolButton'
import { Spacer } from 'components/Spacer/Spacer'
import { MonthLabel } from 'components/MonthLabel/MonthLabel'
import { Clock } from 'components/Clock/Clock'

export const TopBar = ({ currentMonth, currentYear, setCurrentDate, setPrevMonth, setNextMonth }) => {
  return (
    <DashboardHeader>
      <LeftGroup>      
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
        {/* <IconButton onClick={() => {}}><CalendarClock  /></IconButton>      */}
      </LeftGroup>
      <RightGroup>
        <Clock />
      </RightGroup>
    </DashboardHeader>
  )
}

