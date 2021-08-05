import React from 'react'
import './App.css'
import Home from './Components/Home';
import Description from './Components/Description';
import {BrowserRouter, Route, Switch} from "react-router-dom"





function App() {
  

  return (
    
     
     <BrowserRouter>
  <Switch>
    <>
          <Route exact path="/"  component={Home} />
          <Route path="/Description/:id" component={Description} />

          </>
        </Switch>
        </BrowserRouter>
     
    
     
  );
}

export default App;
