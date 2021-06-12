import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import '../styles/main.css';
import {Link} from 'react-router-dom';

class Menu extends React.Component{

    constructor(props){
        super(props)

        this.state = {...this.props}
    }
    

    render(){
        return(
            <Container className="theme">
                <Navbar expand="lg">
                    <Navbar.Brand>Template FullStack</Navbar.Brand>

                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                        <Navbar.Collapse id="navbar-toggle" >
                            <Nav className="ml-auto justify-content-end" >
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/object">Save article</Link>
                            <Link className="nav-link" to="/list_object">List article</Link>
                            {
                                this.state.isAuthenticate 
                                ? <Link className="nav-link" onClick={this.state.logout}>Logout</Link>
                                : <Link className="nav-link" to="/login" >Login</Link>
                                
                            }
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            </Container>
        );
    }
}

export default Menu;