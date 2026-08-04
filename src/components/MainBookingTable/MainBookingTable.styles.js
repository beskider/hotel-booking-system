import styled from 'styled-components';

export const StyledMainBookingTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 0.5rem;
  & th, td {
    border: 1px solid ${({ theme }) => theme.colors.mainGray};
    padding: 8px;
    text-align: center;
  }
`

//themes
/*
    background-color: ${({ $saturday = false }) =>  ( $saturday ? 'yellow' :  '' )};
    background-color: ${({ $sunday = false }) => ( $sunday ? 'red' :  '' )};
  */ 
/*
  background-color: ${({ theme, $saturday, $sunday }) => {
    if ( $saturday ) return theme.cellColors.saturday
    if ( $sunday ) return theme.cellColors.sunday
    return ''
  }};
*/

export const ColoredTh = styled.th`
  
  background-color: ${({ theme, $color }) => {
    switch( $color) {
      case 'saturday':
        return theme.cellColors.saturday
      case 'sunday':
        return theme.cellColors.sunday
      default:
        return ''
    }
  }};
  border: 10px solid red;



`

export const RoomNumerTableHeader = styled.th`
  width: 5rem;
`

export const RoomTypeTableHeader = styled.th`
  width: 4rem;
`

export const RoomStatusTableHeader = styled.th`
  width: 5.5rem;
`
