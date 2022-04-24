import React from "react";

const weatherPresets = [
  "Clear", "Light clouds", "Cloudy", "Rainy", "Fog"
]

const DisplayWeather = () => {
  

  return(
    <>
      <p>Weather forecast for today is: </p>
      <RandomWeather />
    </>
  )
}

const RandomWeather = () => {
  const randomNumber = Math.floor(Math.random() * weatherPresets.length);
  const weather = weatherPresets[randomNumber]
  return (
    <p>{weather}</p>
  )
}

export default DisplayWeather;