import { buildQueries } from "@testing-library/react";
import React, {useState} from "react";
import Time from "../Services/time"

const DisplayWaitingTime = (props) => {

  const [isLoading, setIsLoaded] = useState(true)
  const [waitingTime, setWaitingTime] =useState()
  //console.log("propsit " + JSON.stringify(props.timetable))
  
  const waitingLineStyle = {
    background: "blue"
  }

  const CalculateWaitingTime = (arrivalTime, departureTime) => {
    return new Promise((resolve, reject) => {  
      let arrayOfArrivalTime 
      let arrayOfDepartureTime
      let waitingTime = 0

      if (arrivalTime != undefined) {
        arrayOfArrivalTime = Time.TimeStringToArray(arrivalTime)
      }

      if ( departureTime != undefined){
        arrayOfDepartureTime = Time.TimeStringToArray(departureTime)
      }

      Promise.all([arrayOfDepartureTime, arrayOfArrivalTime]).then((times) => {
        let hours, minutes
        if (times[1] != undefined) {
          hours = times[0][0] - times[1][0]   //Departure hour - Arrival Hour
          minutes = times[0][1] - times[1][1] //Departure minutes - Arrival minutes
          waitingTime = parseInt(hours) * 60 + parseInt(minutes)
        } 
        resolve(waitingTime)
      })
    })      
  }

  //If no timetable, exit. First service is always null
  if(props.timetable == null) return null
  
  const arrivalTime = props.timetable[props.timetable.length - 1].arrival
  const departureTime = props.departureTime

  const showWait = CalculateWaitingTime(arrivalTime, departureTime)
  showWait.then(ready => {
    setIsLoaded(false)
    setWaitingTime(ready)
  })

  if (isLoading) {
    return(
      <>
        <p className="waiting-time">Calculating ... </p>
      </>
    )
  }

  return(
    <>
      <p className="waiting-time" style={waitingLineStyle} >Transit time is {waitingTime} minutes </p>
    </>
  )
  
}

export default DisplayWaitingTime;