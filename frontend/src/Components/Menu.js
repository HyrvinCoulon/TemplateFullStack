import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Menu extends React.Component{

    constructor(props){
        super(props)

        this.state = {...this.props}
    }
    

    render(){
        return(
            <Container>
                <Navbar className="theme" expand="lg">
                    <Navbar.Brand>Template FullStack</Navbar.Brand>

                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                        <Navbar.Collapse id="navbar-toggle" >
                            <Nav className="ml-auto" >
                            <Link className="nav-link" to="/">Home</Link>
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