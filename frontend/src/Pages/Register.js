import React from 'react';
import {Form, Button} from 'react-bootstrap';
import '../styles/form.css';
import { connect } from "react-redux";
import * as actions from "../actions/auth";

class Register extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            name : "",
            email: "",
            password: "",
            password2: "",
            errors: {
                name: "",
                password: "",
                error: false,
            }
        }

        this.changeName = this.changeName.bind(this)
        this.changePassWord = this.changePassWord.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassWord2 = this.changePassWord2.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeName(event){
        this.setState({
            name:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePassWord(event){
        this.setState({
            password:event.target.value
        })
    }

    changePassWord2(event){
        this.setState({
            password2:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()


        if(this.validate()){
                this.props.onAuth(this.state.username, this.state.email, this.state.password)
                /*axios.post('http://192.168.1.95:8000/api/list/', {
                    name: this.state.name,
                    password: this.state.password
                })
                .then(response => {console.log(response)
                    //this.props.history.push("/")
                    })
                .catch(error => console.log("Error "+ error))*/
        }

    }

    validate(){
        if(this.state.name === ""){
            this.setState({
                errors : {
                    name : "Entrer votre nom svp...",
                }
            })
        }

        console.log(this.state.errors.name)

        if(this.state.password !== this.state.password2){
            this.setState({
                errors : {
                    password : "Entrez le même mot de passe svp...",
                }
            })
        }

        console.log(this.state.errors.password)

        if(this.state.name !== "" && this.state.password === this.state.password2){
            this.setState({
                errors : {
                    error: true,
                }
            })
        }

        return this.state.errors.error;
    }

    render(){
        return(
            <div>
                <Form className="formstyle" onSubmit={this.onSubmit}>
                    <h6 style={{marginLeft:'42%', color:'white'}}>Register</h6><br></br>
                    <Form.Group>
                        <Form.Control className="control-type"
                        type="text"
                        placeholder="Inserez votre nom..."
                        onChange={this.changeName}
                        value={this.state.name}
                        />
                    </Form.Group>
                    <div className="text-danger">{this.state.errors.name}</div>
                    
                    <Form.Group>
                        <Form.Control className="control-type"
                        type="text"
                        placeholder="Inserez votre email..."
                        onChange={this.changeEmail}
                        value={this.state.email}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control className="control-type"
                        type="password"
                        placeholder="Inserez votre mot de passe..."
                        onChange={this.changePassWord}
                        value={this.state.password}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control className="control-type"
                        type="password"
                        placeholder="Inserez votre mot de passe..."
                        onChange={this.changePassWord2}
                        value={this.state.password2}
                        />
                    </Form.Group>
                    <div className="text-danger">{this.state.errors.password}</div>

                    <Button className="btn-style" type="submit">
                        Inscrire
                    </Button>

                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      loading: state.auth.loading,
      error: state.auth.error,
      //token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
      onAuth: (username, email, password) => dispatch(actions.authSignup(username, email, password))
    };
};

export default connect(mapStateToProps,
    mapDispatchToProps)(Register);