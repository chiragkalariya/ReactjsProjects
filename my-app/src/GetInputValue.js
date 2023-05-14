import React, { useState } from "react";
function GetInputValue() {
    const[value, setValue] = useState();
    const[print, setPrint] = useState(false);
  
    function getValue(val) {
      setValue(val.target.value);
      setPrint(false)
    }
    return(
      <>
        {
          print? 
          <h1>{value}</h1>
          :null
        }
        <div>
          <input type='text' placeholder='enter your name' onChange={getValue}/>
          <button type='submit' onClick={() => setPrint(true)}>Submit</button>
        </div>
      </>
    )
  }

  export default GetInputValue;