import React from "react";
import "./GodProfile.css"

const GodProfile = ({gods}) => {
return(
    <div className = "GodProfileContainer"> 
    
    <div>

    <img src={gods.godCard_URL} alt="gods" className = "GodCardImg"></img>
 
    </div>
    <div>

    <h2 className="GodName">{gods.Name}</h2>
      <p className="GodName">{gods.Title}</p>

      <div className = "GodProfileInfo">
          <div><p>{gods.Roles}</p></div>
          <div><p>{gods.Pros}</p></div>
      </div>
    </div>


  </div>
)
}

export default GodProfile