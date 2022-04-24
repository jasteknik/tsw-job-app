import React from "react";
import Weather from "./DisplayWeather"

const dispatchBriefings = [
  "Hello driver! This is your dispatcher today! We have job for you. Please have a look at the service table",
  "Good day train driver! Today we have a busy schedule for you. Please be precise on timings! Safe journey!",
  "Howdy partner! Here is todays schedule!"]

const RandomText = (props) => {

  const setupTime = 2
  const spawnTime = SpawnTime(props.startingService.departureTime, setupTime)
  const spawnPlace = props.startingService.origin

  return(
    <>
      <div className="flex-item flex-item-dispatcher-1">
        <img className="disp-image"  src="../img/dispatcher.png"></img>
      </div>
      <div className="flex-item flex-item-dispatcher-2 border">
        <RandomBriefing />
        <p>Your service is starting in {spawnTime.toString()} at {spawnPlace}. Get in there and setup your loco!</p>
        <Weather />
      </div>
    </>
  )
}

const Dispatcher = (props) => {
  return (
    <RandomText startingService={props.startingService}/>
  )
}

const RandomBriefing = () => {
  const randomNumber = Math.floor(Math.random() * dispatchBriefings.length);
  const briefingText = dispatchBriefings[randomNumber]
  return(
    <p>{briefingText}</p>
  )
}

//Spawntime calculator
function SpawnTime (aDepartureTime, aSetupTime) {
  let spawnMinutes
  const spawnTimeArr = aDepartureTime.toString().split(":")
  const spawnTimeWithSetup = spawnTimeArr[1] - aSetupTime
  const rounded = Math.round(spawnTimeWithSetup/10)
  
  
  if(spawnTimeWithSetup/10 < rounded) {
    spawnMinutes = (rounded * 10) - 5 
    const spawntime = spawnTimeArr[0] + ':' + spawnMinutes
    
    if (spawnMinutes < 0) { 
      let hour = spawnTimeArr[0] - 1
      if (hour < 0) {hour = 23}
      const minutes = 55
      return hour + ':' + minutes
    }
    if (spawnMinutes < 10 )  { 
      const leadingZero = ('00' + spawnMinutes).slice(-2)
      console.log(spawnTimeArr[0] + ':' + leadingZero)
      return spawnTimeArr[0] + ':' + leadingZero
    }
      return spawntime
  }

  spawnMinutes = rounded * 10
  if (spawnMinutes == 0) { return spawnTimeArr[0] + ':00'}
  
  if (spawnMinutes < 10 )  { 
    const leadingZero = ('00' + spawnMinutes).slice(-2)
    console.log(spawnTimeArr[0] + ':' + leadingZero)
    return spawnTimeArr[0] + ':' + leadingZero}
  

  return spawnTimeArr[0] + ':' + spawnMinutes
  }

export default Dispatcher;