import React from 'react';
import {Card} from 'react-bootstrap';

class Cards extends React.Component{

    render(){
        return(
            <Card style={{margin:"10px 0", padding:"5px"}}>
                <Card.Title>{this.props.user.name}</Card.Title>
                <Card.Text>This is one of the user.</Card.Text>
            </Card>
        )
    }
}

export default Cards;