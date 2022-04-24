import React from 'react';

const DisplayRouteButtons = (props) => {
  
  return(
    <div>
      {props.data.map((mappedData, i) => 
        (<button 
          key={i} 
          className="flex-auto text-gray-50 p-4 m-4 size-route-button rounded-xl shadow-xl border-2 border-yellow-600"
          style={backgroundImage(mappedData.id)} 
          onClick={(e) => props.handleRouteSelect(e, mappedData.id)}>
          {mappedData.name}
        </button>))}
    </div>
  )
}

const backgroundImage = (id) => {
  const bgUrl = "../img/" + id + "_button.png"
  return ({background: `url(${bgUrl})` })
}

export default DisplayRouteButtons;
