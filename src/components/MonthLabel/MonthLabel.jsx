import { StyledMonthLabel } from './MonthLabel.styles'

import { countDaysInMonth } from 'helpers/date'
import { monthsGenitiveNames } from 'constants/months'

export const MonthLabel = ({ month, year, setPrevMonth, setNextMonth }) => {
  
  const handleMouseWheel = e => {      
    if ( e.deltaY > 0 ) { setNextMonth() }
    if ( e.deltaY < 0 ) { setPrevMonth() }
  }
    
  return (
    <StyledMonthLabel
      onWheel={ e => handleMouseWheel(e)}    
    >
      1 -
      {' '}
      {countDaysInMonth(month, year)} 
      {' '}
      {monthsGenitiveNames[month]} 
      {' '}
      {year}r. 

    </StyledMonthLabel>
  )
}