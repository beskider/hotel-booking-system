import { useState, useEffect } from 'react';
import { monthsDenominNames } from 'constants/months';

import { 
  StyledMainBookingTable,
  RoomStatusTableHeader, 
  RoomTypeTableHeader,
  RoomNumerTableHeader,
  ColoredTh
} from './MainBookingTable.styles'
import { capitalizeFirtLetter } from 'helpers/string';
import { countDaysInMonth, daysOfMonthArray, getSaturdaysOfMonth, getSundaysOfMonth } from 'helpers/date';

export const MainBookingTable = ({ month, year }) => {

  const [ rooms, setRomms ] = useState([])
  const [ isLoadingRooms, setIsLoadingRooms ] = useState(true)
  const [ errorLoadingRooms, setErrorLoadingRooms ] = useState(null)
  const [ showTodayLine, setShowTodayLine ] = useState(false)

  useEffect( () => {
    const loadRooms = () => {
      try {
        fetch('data/rooms.json',
          {
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }
        )
        .then( res => {
          return res.json()
        })
        .then( rooms => {
          setErrorLoadingRooms(false)
          setIsLoadingRooms(false)
          setRomms(rooms)
        })
      } catch(e) {
        setErrorLoadingRooms(e.message)
      }
    }

    loadRooms()

  }, []) 

  const daysInMonth = countDaysInMonth(month, year)
  const saturdays = getSaturdaysOfMonth(month, year)  
  const sundays = getSundaysOfMonth(month, year)
  
  useEffect( () => {     
    if ( month === new Date().getMonth() &&
    year === new Date().getFullYear() ) {        
      setShowTodayLine(true)
    } else {
      setShowTodayLine(false)
    }
  }, [ month, year ])

  const getDayColor = day => {
    let color = ''
    if (saturdays.includes(day)) { color = 'saturday'; }
    if (sundays.includes(day)) { color = 'sunday'}
    return color
  }

  const tableRowNumber = () => daysOfMonthArray(month, year).map( day => (
    <ColoredTh 
      key={day}      
      $color={getDayColor(day)}
      $todayMarker={showTodayLine && (day === new Date().getDate())}
    >
        {day}
    </ColoredTh>  
  ))  

  const tableRowEmpty = () => daysOfMonthArray(month, year).map( day => (
    <ColoredTh 
      key={day}                
      $color={getDayColor(day)}
      $todayMarker={showTodayLine && (day === new Date().getDate())}
    />      
  ))  

  if (isLoadingRooms) return <h3>Ładowanie danych...</h3>
  else if (errorLoadingRooms) return <h1>Błąd: {errorLoadingRooms} </h1>
  else return (
    <StyledMainBookingTable>
      <thead>
        <tr>
          <RoomNumerTableHeader scope="col" rowSpan={2}>Numer</RoomNumerTableHeader>
          <RoomTypeTableHeader scope="col"  rowSpan={2}>Typ</RoomTypeTableHeader>
          <RoomStatusTableHeader scope="col" rowSpan={2}>Status</RoomStatusTableHeader>
          <th scope="col" colSpan={daysInMonth}>{capitalizeFirtLetter(monthsDenominNames[month])} {year}</th>
        </tr>
        <tr>               
          { tableRowNumber() }                 
        </tr>
      </thead>
      <tbody>

        { ( rooms && rooms.length > 0 ) ? (
            rooms.map( room => (
            <tr key={room.id}>
              <td>{room.label}</td>
              <td>{room.capacity} os.</td>
              <td>{room.available ? "dostępny" : "niedostępny"}</td>
              { tableRowEmpty() }  
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={daysInMonth + 3}>
              Brak danych
            </td>
          </tr>
        )}






      </tbody>
    </StyledMainBookingTable>
  )
}