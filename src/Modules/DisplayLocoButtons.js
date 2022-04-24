import React from 'react';
import Button from './Button';

const DisplayLocoButtons = (props) => {
    if (props.data == undefined) {return (<></>)}
    
    return(
      <div className="grid grid-cols-3 gap-0">
        {props.data[0].locos.map((loco, i) => 
          <button 
            key={i} 
            className="size-loco-button rounded-xl shadow-xl border-2 border-yellow-600 scale-50 hover:scale-75 ease-out duration-100"  
            style={backgroundImage(loco)}
            onClick={(e) => props.handleLocoSelect(e, loco)}>
              
          </button>
        )}
      </div>
    )
}
export default DisplayLocoButtons;

const backgroundImage = (loco) => {
  const trimmedLoco = loco.replace(/\s/g, '');
  const bgUrl = "../img/locos/" + trimmedLoco + ".png"
  return ({background: `url(${bgUrl})` })
}