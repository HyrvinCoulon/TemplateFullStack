import React from 'react';
import {Form, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { ObjectSaveUp } from '../actions/usersActions';


class ObjectSave extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            name : "",
            description: "",
            errors: {
                name : "",
                description: "",
                error: false,
            },
            ...this.props
        }
        console.log(this.state)
        this.changeName = this.changeName.bind(this)
        this.changeDescription = this.changeDescription.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeName(event){
        this.setState({
            name:event.target.value
        })
    }

    changeDescription(event){
        this.setState({
            description:event.target.value
        })
    }
   onSubmit(event){
    event.preventDefault()


    if(this.validate()){
            this.props.onAuth(this.state.token, this.state.name, this.state.description)
    }

}

validate(){
    if(this.state.name === ""){
        this.setState({
            errors : {
                name : "Entrez le nom de l'article ou objet svp...",
            }
        })
    }

    console.log(this.state.errors.name)

    if(this.state.description !== ""){
        this.setState({
            errors : {
                description : "Entrez la description svp...",
            }
        })
    }



    console.log(this.state.errors.password)

    if(this.state.name !== "" && this.state.description !== ""){
        this.setState({
            errors : {
                error: true,
            }
        })
    }

    return this.state.errors.error;
}

  render(){
      return (
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
                        placeholder="Inserez votre description..."
                        onChange={this.changeDescription}
                        value={this.state.description}
                        />
                    </Form.Group>

                    <div className="text-danger">{this.state.errors.description}</div>

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
      token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
      onAuth: (token, name, description) => dispatch(ObjectSaveUp(token, name, description))
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
  )(ObjectSave);