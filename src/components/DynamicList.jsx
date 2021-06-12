
import React, { useState, useEffect } from "react";




function DynamicList({ className: classNameProps, text, text2 }) {

  const [attActive, setActive] = useState(false)
  
  useEffect(() => {
      setActive(false)
    
  },[attActive]);
  const className = classNameProps ? classNameProps : "";
  
  return (
    
      <li className={` ${className} ${attActive? 'active' : ""}`} onClick={()=>setActive(true)} >
        {text} <br/>
        {text2}
      </li>

  );

}



export default DynamicList;