import React from 'react';

const Row = (props) => {

    const rowTexts = props.rowTexts.texts.map((txt, i) => 

      <li key={i} className="border-dashed border-b-2 border-gray-300">{txt}</li> 
   )
  return(
    <ul className="bg-gray-50 font-mono font-thin text-xs w-5xl">
      {rowTexts}
    </ul>
  )
}

export default Row;