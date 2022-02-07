import React from "react";
import "./App.css";
import { Route} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  console.log(props);
  return(
  <div>
    <h1>HATS PAGE</h1>
  </div>
  )
  };

function App() {
  return (
    <div>
      
     
        {/*  <HomePage/>  */}
        <Route exact path="/" component={HomePage} />
        <Route exact  path="/hats" component={HatsPage} />
  
      
    </div>
  );
}

export default App;
