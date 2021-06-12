import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Cards from './Card';
import { getUsers, getObjects } from '../actions/usersActions';


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
        this.props.getUsers()
    }


    Listings(){
       return this.props.users.map(user => {
            return <Cards user={user} />
        });
    }

    render(){
        return(
            <Container style={{padding:'15px'}}>
                {this.Listings()}
            </Container>
        );
    }
}



const mapStateToProps = state => ({
    users: state.set.users,
    objects : state.set.objects
});



export default connect(mapStateToProps, {getUsers, getObjects})(Listing);