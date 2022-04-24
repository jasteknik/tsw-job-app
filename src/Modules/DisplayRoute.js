import React, {useState, useEffect}  from "react";
import DisplayServiceTimetable from "./DisplayServiceTimetable";
import DisplayWaitingTime from "./DisplayWaitingTime";
import { v4 as uuidv4 } from 'uuid';

const DisplayRoute = (props) => {

  const [showTimetable,      setShowTimetable]      = useState([])

  const handleServiceClick = (e, i) => {
    e.preventDefault()
    let newArr = [...showTimetable] //copy old array to new
    newArr[i] = showTimetable[i] ? false : true //modify array
    setShowTimetable(newArr) // set as new array
  }

  //RETURN STATEMENT FOR JOB ROUTING
  return(
    <React.Fragment>
      <h4>Job routing is:</h4>
      <div>
        {props.serviceList.map(({ id,  service, loco, origin, destination, departureTime, traveltime }, i) => (
          <> 
            { props.timetableList.length > 0 ?  //Only render when timetable is ready
              <DisplayWaitingTime 
                timetable={ props.timetableList[i-1]} 
                departureTime={departureTime} /> : null }
            <p className="" key={id}><button onClick={(e) => handleServiceClick(e, i)}>Service: {service}</button> Departing at <b>{departureTime}</b> -- From: <b>{origin}</b> - To: <b>{destination}</b>. Service length: <b>{traveltime}</b></p>
            <div>{ showTimetable[i] ? <Timetable 
              service={service} 
              loco={loco[0]}
              timetable={props.timetableList[i]} /> : null }</div>
              
          </>
        ))}
        
      </div>
    </React.Fragment>
  )
}

const Timetable = (props) => {
  return ( 
    <>
      <h4>TIMETABLE FOR {props.service}</h4>
      <p>Used loco for this route: {props.loco}</p>
      <DisplayServiceTimetable timetable={props.timetable}/>
    </>
  )
}

export default DisplayRoute;