import React, { useState } from 'react';

function Calendar() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  // function to generate an array of days for the current month
  const getDaysInMonth = () => {
    const days = [];
    const date = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = date.getDay();
    const endDay = startDay + daysInMonth - 1;
    const prevMonthDays = new Date(year, month, 0).getDate();

    for (let i = 0; i < 42; i++) {
      let day = i - startDay + 1;
      let isCurrentMonth = true;

      if (i < startDay) {
        day = prevMonthDays - startDay + i + 1;
        isCurrentMonth = false;
      } else if (i > endDay) {
        day = i - endDay;
        isCurrentMonth = false;
      }

      days.push({
        day,
        isCurrentMonth
      });
    }

    return days;
  };

  // function to handle click events on day cells
  const handleDateClick = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  // function to switch to the previous month
  const handlePrevMonthClick = () => {
    setMonth(month - 1);
    if (month === 0) {
      setYear(year - 1);
    }
  };

  // function to switch to the next month
  const handleNextMonthClick = () => {
    setMonth(month + 1);
    if (month === 11) {
      setYear(year + 1);
    }
  };

  const daysInMonth = getDaysInMonth();

  return (
    <div>
      <div>
        <button onClick={handlePrevMonthClick}>Prev</button>
        <span>{`${month + 1}/${year}`}</span>
        <button onClick={handleNextMonthClick}>Next</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {daysInMonth.map((day, index) => {
            return (
              <td
                key={index}
                className={`${day.isCurrentMonth ? '' : 'other-month'} ${
                  selectedDate &&
                  day.day === selectedDate.getDate() &&
                  month === selectedDate.getMonth() &&
                  year === selectedDate.getFullYear()
                    ? 'selected'
                    : ''
                }`}
                onClick={() => handleDateClick(day.day)}
              >
                {day.day}
              </td>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;