import React from 'react'
import moment from "moment";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'


export default function CheckOutCal(props) {
    console.log(props.year)
    const [month, setMonth] = useState(props.index);
const [year, setYear] = useState(+props.year);
const [day, setDay] = useState('');
const [weekDay, setWeekDay] = useState('');


function getDaysInMonth() {
    const daysInMonth = moment(`${year}-${month + 1}`, "YYYY-MM").daysInMonth();
    const firstDayOfMonth = moment(`${year}-${month + 1}-01`, "YYYY-MM-DD").format("d");
    return { daysInMonth, firstDayOfMonth };
  }

   


function getWeekDay(day, month, year) {

  const date = new Date(`${year}-${month}-${day}`); // create new Date instance
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekDayIndex = date.getDay(); // get day of the week (0-6)
  return weekDays[weekDayIndex]; // return the corresponding weekday name
}



  function renderCalendar() {
    const { daysInMonth, firstDayOfMonth } = getDaysInMonth();
    const rows = [];
    let cells = [];
  
    for (let i = 0; i < firstDayOfMonth; i++) {
      cells.push(<td key={i}></td>);
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(<td key={day} onClick={()=>props.selectDate(day,month,year)} className='dates' >{day}</td>);
      if (cells.length === 7) {
        rows.push(<tr key={day}>{cells}</tr>);
        cells = [];
      }
    }
  
    if (cells.length > 0) {
      while (cells.length < 7) {
        cells.push(<td key={cells.length}></td>);
      }
      rows.push(<tr key={daysInMonth}>{cells}</tr>);
    }
    return (
        <table>
          <thead>
            <tr>
              <th style={{backgroundColor:'rgb(167, 165, 165)'}} >S</th>
              <th style={{backgroundColor:'rgb(167, 165, 165)'}}>M</th>
              <th style={{backgroundColor:'rgb(167, 165, 165)'}}>T</th>
              <th style={{backgroundColor:'rgb(167, 165, 165)'}}>W</th>
              <th style={{backgroundColor:'rgb(167, 165, 165)'}}>T</th>
              <th style={{backgroundColor:'rgb(167, 165, 165)'}}>F</th>
              <th style={{backgroundColor:'rgb(167, 165, 165)'}}>S</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );

}

function handlePrevMonth() {
    setMonth((prevMonth) => prevMonth - 1);
    console.log(month)
    if(month==0){
        setYear((prevYear) => prevYear - 1);
        setMonth(11)
    }
  }
  
  function handleNextMonth() {
    setMonth((prevMonth) => prevMonth + 1);
    console.log(month)
    if(month==11){
        setYear((prevYear) => prevYear + 1);
        setMonth(0)
    }
  }
  
  function handlePrevYear() {
    setYear((prevYear) => prevYear - 1);
  }
  
  function handleNextYear() {
    setYear((prevYear) => prevYear + 1);
  }
  return (
    <div>
    <div>
      <span onClick={handlePrevMonth}><FontAwesomeIcon icon={faBackward} /> </span>
      <span>{moment(`${year}-${month + 1}`, "YYYY-MM").format("MMM YYYY")}</span>
      <span onClick={handleNextMonth}><FontAwesomeIcon icon={faForward} /> </span>
    </div>
    {renderCalendar()}
    {/*<div>
      <button onClick={handlePrevYear}>Prev Year</button>
      <span>{year}</span>
      <button onClick={handleNextYear}>Next Year</button>
  </div>*/}
    </div>
  )
}
