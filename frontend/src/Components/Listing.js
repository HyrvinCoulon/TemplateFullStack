import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import * as actions from "../actions/auth";
import { connect } from "react-redux";
import Cards from './Card';


class Listing extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount(){
        axios.get(actions.address+"api/list/")
        .then(response => {
            this.setState({users: response.data})
        })
        .catch(err => {
          console.log(err)
        })
    }


    Listings(){
       return this.state.users.map(user => {
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



export default connect(null, null)(Listing);