import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Cards from './Cards';
import { getObjects } from '../actions/usersActions';


class ArticleListing extends React.Component{

    static propTypes = {
        objects: PropTypes.array.isRequired,
        getObjects: PropTypes.func.isRequired,
    };

    componentDidMount(){        
        this.props.getObjects(this.props.token)
    }


    Listings(){
       return this.props.objects.map(object => {
            return <Cards object={object} />
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
    objects : state.set.objects,
    token : state.auth.token
});



export default connect(mapStateToProps, {getObjects})(ArticleListing);