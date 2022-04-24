import React from 'react';

const Top = (props) => {
  return(
    <div className="font-mono text-xs mt-4 mb-4 pt-2 border-t-2 border-dashed">
      <p>Operator: {props.operator}</p>
      <p>Top part text</p>
      <p>Top part text</p>
    </div>
  )
}

export default Top;