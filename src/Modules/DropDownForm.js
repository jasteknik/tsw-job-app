import React from "react";

const DropDownForm = (props) => {
  console.log(props.options)
  
  const FormOptions = (props) => {
    console.log(props.options[1])
    
    return(
      props.options.map((value, i) => { 
        <option key={i} value="Passanger">{value}</option>
      })
    )
  }

  return(
    <form onSubmit={props.handleSubmit}>
        <label>
          Pick service type:
          <select value={props.value} onChange={props.handleChange}>            
            <option value="Any type">Any type</option>
            <option value="Passanger">Passanger</option>
            <option value="Freight">Freight</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
  )
}

export default DropDownForm;