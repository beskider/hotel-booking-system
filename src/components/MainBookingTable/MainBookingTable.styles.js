import styled, { css } from 'styled-components';

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
    
  
  ${({ theme, $todayMarker }) =>
    $todayMarker && 
  css`
      position: relative; 
      &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 8px;
        background: ${({ theme }) => theme.cellColors.todayMarker };
        transform: translateX(-50%);
        opacity: 0.9;
      }
    `}



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
