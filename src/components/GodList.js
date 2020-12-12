import React, { useState, useEffect } from "react";
import axios from "axios"
import GodCard from "./GodCard"

let config = require("../config")


const hirez = require("hirez-api");

const api = new hirez.Smite({
  platform: "PC",
  devId: config.devId,
  authKey: config.authKey,
});
export default function GodList({query, god, setGod, setGodId}) {


  


  useEffect(() => {
    
    api
      .getGods()
      .then(response => {
        console.log(response);
        const characters = response.filter(character =>
          character.Name.toLowerCase().includes(query.toLowerCase())
        );
       
        setGod(characters);
      });
    }, [query]);

  // useEffect(() => {
    
  //   api
  //     .ping()
  //     .then(response => {
  //       console.log(response);
        
       
        
  //     });
  //   }, [query]);
  // useEffect (() => {

  //   axios.get("https://rickandmortyapi.com/api/character")
  //   .then(response => {
  //       console.log(response);
  //       const characters = response.data.results.filter(character =>
  //         character.name.toLowerCase().includes(query.query.toLowerCase())
  //       );
       
  //       setGod(characters);
  //     });
  //   }, [query]);



  return (

    <div className="GodMainDiv">

      {god.map(gods => {
        

        return <GodCard setGodId= {setGodId} gods={gods} key={gods.id} />
        
        
      })}
    </div>

  )
}


