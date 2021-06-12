import React, { useState } from "react";
import './hambMenu.css'

export default function HambMenu() {

  const [open, setOpen] = useState("close");
  const [display, setDisplay] = useState('d-none')

  function toggle() {
    const isOpen = open === "close" ? "open" : "close";
    const isDisplay = display=== 'd-none'? 'd-inline':'d-none'    
    setOpen(isOpen);
    setDisplay(isDisplay)
  }

  return (
    <React.Fragment>
      <div className={`${open} hamburger`} onClick={toggle} >
        <span className={`${open} hamburger__top-bun`}></span>
        <span className={`${open} hamburger__bottom-bun`}></span>
      </div>
      <div className={`${display}  pe-2 pt-1 pe-md-0 drop drp`} >
        <ul className=" dropdown-content " >
          <li><a className=" py-2"> KODEMIA <br></br> <span className="text-muted">@kodemia</span></a></li>
          <li><a className=" py-2 border-top" href="https://dev.to/dashboard" >Dashboard</a></li>
          <li><a className=" py-2" href="https://dev.to/new">Write a Post</a></li>
          <li><a className=" py-2" href="https://dev.to/readinglist">Reading list</a></li>
          <li><a className=" py-2 border-bottom" href="https://dev.to/settings">Settings</a></li>
          <li><a className=" py-2 " href="hhttps://dev.to/signout_confirm">Sign Out</a></li>
        </ul>
      </div>
      
      
      
  </React.Fragment>
  );
}



