import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Menu extends React.Component{

    

    render(){
        return(
            <Container>
                <Navbar className="theme" expand="lg">
                    <Navbar.Brand>Template FullStack</Navbar.Brand>

                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                        <Navbar.Collapse id="navbar-toggle" >
                            <Nav className="ml-auto" >
                            <Link className="nav-link" to="/">Home</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            </Container>
        );
    }
}

export default Menu;