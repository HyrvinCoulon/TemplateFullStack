import React from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import Register from './Pages/Register';

class App extends React.Component{

  

  render(){
      return (
        <BrowserRouter>
          <Route path="/" exact render={ () => <Home />}/>
          <Route path="/register" exact render={ () => <Register />}/>
          <div>
            Bienvenue
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
