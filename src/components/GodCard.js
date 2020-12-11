import React from "react";
import "./GodCard.css"






const GodCard = ({ gods }) => {

  return (


    <div className="GodContainer">
      <div>

        <h2 className="GodName">{gods.Name}</h2>
        <p className="GodName">{gods.Title}</p>
      </div>
      <div>

        <img src={gods.godIcon_URL} alt="gods" className="GodImg"></img>
      </div>


    </div>



  );
};
export default GodCard;