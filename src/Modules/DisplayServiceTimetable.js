import React from "react";
import DisplayTimetable from './DisplayTimetable';

const DisplayServiceTimetable = (props) => {
  //if (props.serviceList == undefined) {return (<div></div>)}

  return(
    <table>
        <thead>
          <tr>
            <th>Station</th>
            <th>Arrival</th>
            <th>Depature</th>
          </tr>
          </thead>
        <tbody>
          <DisplayTimetable timetable={props.timetable}/>
        </tbody>
    </table>
  )
}


export default DisplayServiceTimetable;