import React from 'react';
import Menu from '../Components/Menu';
import { connect } from "react-redux";

import {withRouter} from 'react-router-dom';
import * as actions from "../actions/auth";

class Home extends React.Component{

    constructor(props){
        super(props)

        this.state = {...this.props}
    }

    render(){
        return(
            <div>
                <Menu state={this.state.isAuthenticated} logout={this.state.logout}/>
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