import React from "react";
import { v4 as uuidv4 } from 'uuid';

const DisplayTimetable = (props) => {
  return(
    props.timetable.map((timetableData) =>      
      <React.Fragment>
        <tr key={timetableData.id}>
          <td key={uuidv4()} className="table-station">{timetableData.stop}</td>
          <td key={uuidv4()} className="table-arrival">{timetableData.arrival}</td>
          <td key={uuidv4()} className="table-departure">{timetableData.departure}</td>  
        </tr>
      </React.Fragment>

    )
  )
}
export default DisplayTimetable;
