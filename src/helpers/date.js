export const countDaysInMonth = ( month, year ) => new Date(year, month + 1, 0).getDate()

// The function returns an array containing the numbers of the days from the specified month.
// call: daysOfMonthArray(1, 2027) 
// result: [ 1, 2, 3, 4, ..., 28 ]
export const daysOfMonthArray = ( month, year ) => Array.from({ length: countDaysInMonth(month, year)}, (_, i) => i + 1)

export const getSaturdaysOfMonth = ( month, year ) => {
    const saturdays = [];
    const date = new Date(year, month, 1);
    while (date.getMonth() === month) {
        if (date.getDay() === 6) { // 6 - saturday
            saturdays.push(date.getDate());
        }
        date.setDate(date.getDate() + 1);
    }
    return saturdays;
}

export const getSundaysOfMonth = ( month, year ) => {
    const sundays = [];
    const date = new Date(year, month, 1);
    while (date.getMonth() === month) {
        if (date.getDay() === 0) { // 7 - sunday
            sundays.push(date.getDate());
        }
        date.setDate(date.getDate() + 1);
    }

    return sundays;
}


  
  



      