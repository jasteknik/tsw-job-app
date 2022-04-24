import React from 'react';

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(date)

const Header = (props) => {
  const issuedByName = `${props.issued.firstName.charAt(0)}.${props.issued.midName.toUpperCase()}.  ${props.issued.lastName} `

  return(
    <div className="flex justify-between  mb-4">
      <div>
        <h1 className="font-mono text-xl text-black">{props.headerText}</h1>
      </div>
      <div className="border-l-2 border-dashed px-3 grid font-mono text-xs justify-items-end">
        
        <p>Issued by:</p>
        <p>{issuedByName}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default Header;