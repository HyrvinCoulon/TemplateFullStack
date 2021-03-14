import React from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Register extends React.Component{

    constructor(){
        super()

        this.state = {
            name : "",
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
        this.changePassWord2 = this.changePassWord2.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeName(event){
        this.setState({
            name:event.target.value
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
                axios.post('http://192.168.1.95:8000/api/list/', {
                    name: this.state.name,
                    password: this.state.password
                })
                .then(response => {console.log(response)
                    //this.props.history.push("/")
                    })
                .catch(error => console.log("Error "+ error))
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
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Control type="text"
                        placeholder="Inserez votre nom..."
                        onChange={this.changeName}
                        value={this.state.name}
                        />
                    </Form.Group>
                    <div className="text-danger">{this.state.errors.name}</div>

                    <Form.Group>
                        <Form.Control type="password"
                        placeholder="Inserez votre mot de passe..."
                        onChange={this.changePassWord}
                        value={this.state.password}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="password"
                        placeholder="Inserez votre mot de passe..."
                        onChange={this.changePassWord2}
                        value={this.state.password2}
                        />
                    </Form.Group>
                    <div className="text-danger">{this.state.errors.password}</div>

                    <Button type="submit">
                        Inscrire
                    </Button>

                </Form>
            </div>
        );
    }
}

export default Register;