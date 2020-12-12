import React from "react";
import "./GodCard.css"
import {NavLink} from "react-router-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"






const GodCard = ({ gods, setGodId}) => {
  const handleClick = () => {
     
    console.log("Clicked", gods.Name);
    setGodId(gods)
    
  }
  return (

<NavLink to ={gods.Name.split(" ").join("")}>
    <div className="GodContainer" onClick={handleClick}> 
      <div>

        <h2 className="GodName">{gods.Name}</h2>
        <p className="GodName">{gods.Title}</p>
      </div>
      <div>

        <img src={gods.godIcon_URL} alt="gods" className="GodImg"></img>
      </div>


    </div>
    </NavLink>


  );
};
export default GodCard;