import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

import PropTypes from 'prop-types';
import * as actions from "../actions/auth";
import { connect } from "react-redux";
import Cards from './Card';
import { getUsers } from '../actions/usersActions';


class Listing extends React.Component{

    static propTypes = {
        users: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
    };

    /*constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }*/

    componentDidMount(){
        /*axios.get(actions.address+"api/list/")
        .then(response => {
            this.setState({users: response.data})
        })
        .catch(err => {
          console.log(err)
        })*/
        this.props.getUsers()
    }


    Listings(){
       return this.props.users.map(user => {
            return <Cards user={user} />
        });
    }

    render(){
        return(
            <Container style={{padding:'15px', margin:"0 10px 10px 0"}}>
                {this.Listings()}
            </Container>
        );
    }
}



const mapStateToProps = state => ({
    users: state.set.users,
});



export default connect(mapStateToProps, {getUsers})(Listing);