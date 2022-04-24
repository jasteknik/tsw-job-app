import React from "react";
import Button from './Button';
import DisplayHeader from './Header'
import DisplayRouteButtons from './DisplayRouteButtons';
import DisplayLocoButtons from './DisplayLocoButtons';
import DisplayRoute from './DisplayRoute';
import DropDownForm  from "./DropDownForm";
import Dispatcher from "./Dispatcher";

const DisplayMainpage = (props) => {
  //Nothing is selected, INITIAL PAGE RENDER
  if (props.filteredList == undefined) {
    return(
      <div className="">
        <DisplayHeader />
        <div className="">
          <DropDownForm value={props.formValue} 
            handleChange={props.handleChange} 
            handleSubmit={props.handleSubmit} 
            options={props.formOptions} />
        </div>
          
        <div className="">
          <h2>Select route</h2>
        </div>
        <div className="flex">
          <DisplayRouteButtons data={props.routeData} handleRouteSelect={props.handleRouteSelect} />
        </div>
        
      </div>
    )
  }
  //Route is selected, LOCO SELECT RENDER
  if (props.serviceList == undefined) {
    return(
      <div className="">
        <DisplayHeader />
        <h2 className="ml-10 text-xl text-blue-700">Select loco</h2>
        <div className="flex-1 max-w-4xl mx-auto py-4 bg-blue-500">  
          <DisplayLocoButtons data={props.filteredList} handleLocoSelect={props.handleLocoSelect} />
        </div>
      </div>
    )
  }
  //DISPLAY JOB ROUTING, FINAL RENDER
  return(
    <div className="">
      <DisplayHeader />
      <div className="">
        <Dispatcher startingService={props.serviceList[0]}/>
      </div>
      <div className="">
        <DisplayRoute serviceList={props.serviceList} timetableList={props.timetableList}/>
      </div>
      <div className="">
        <Button onClick={props.buttonOnClickEvent} text="RANDOMIZE"/>
        <Button onClick={props.clearSearchButton} text="Back to start"/>
      </div>
    </div>
  )
}

export default DisplayMainpage;