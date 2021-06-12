import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { connect } from "react-redux";
import * as actions from "./actions/auth";
import ObjectSave from './Pages/ObjectSave';
import ArticleListing from './Components/ArticleListing';

class App extends React.Component{

  componentDidMount(){
    this.props.onTryAutoSignup()
  }

  render(){
      return (
        <BrowserRouter>
          <Route path="/" exact render={ () => <Home state={this.props.state} />}/>
          <Route path="/register" exact render={ () => <Register />}/>
          <Route path="/login" exact render={ () => <Login />}/>
          <Route path="/object" exact render={ () => <ObjectSave />} />
          <Route path="/list_object" exact render={ () => <ArticleListing />}/>
          
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


// 
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
