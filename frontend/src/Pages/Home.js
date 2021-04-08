import React from 'react';
import Menu from '../Components/Menu';
import { connect } from "react-redux";

import {withRouter} from 'react-router-dom';
import * as actions from "../actions/auth";
import Listing from '../Components/Listing';

class Home extends React.Component{

    constructor(props){
        super(props)

        this.state = {...this.props}
    }

    render(){
        return(
            <div>
                <Menu state={this.state.isAuthenticated} logout={this.state.logout}/>
                <br></br>
                <p style={{marginLeft:"25%"}}> Welcome on this template   </p>
                <Listing />
            </div>
        );
    }
}

 
const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(actions.logout())
    };
}

export default withRouter(connect(null, mapDispatchToProps)(Home));