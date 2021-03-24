import React from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { connect } from "react-redux";
import * as actions from "./actions/auth";

class App extends React.Component{

  componentDidMount(){
    this.props.onTryAutoSignup()
  }

  render(){
      return (
        <BrowserRouter>
          <Route path="/" exact render={ () => <Home />}/>
          <Route path="/register" exact render={ () => <Register />}/>
          <Route path="/login" exact render={ () => <Login />}/>
          
        </BrowserRouter>
      );
  }
}

// Identifiant du client
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
