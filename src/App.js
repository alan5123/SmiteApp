
import React, { useState, useEffect } from "react";
import GodList from "./components/GodList"
import Searchbar from "./components/Searchbar"
import "./App.css"
function App() {

  const [query, setQuery] = useState("");

  return (


    <div className="App">
      <Searchbar query = {query} setQuery={setQuery}/>
      <GodList query = {query} setQuery={setQuery}/>
    </div>
  );
}

export default App;
