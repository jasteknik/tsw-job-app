import PreviousMap from 'postcss/lib/previous-map';
import React from 'react';

const Bottom = (props) => {
  return(
    <div className="font-mono text-xs mt-10 mx-5">
      <div><p>Work order approved by:</p></div>
      
      <div className="mt-8 grid grid-cols-2">
        <div>_______________________________</div>
        <div>_______________________________</div>
      </div>
      <div className="grid grid-cols-2">
        <div>Dispatcher: {props.dispatchName.firstName} {props.dispatchName.midName.toUpperCase()}. {props.dispatchName.lastName}</div>
        <div>Engineer: {props.driverName}</div>
      </div>
    </div>
  )
}

export default Bottom;