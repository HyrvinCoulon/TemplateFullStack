import axios from "axios";
import * as actionTypes from "./authTypes";
import * as actions from "../actions/auth";


export const getUsers = () => {
    return dispatch => {

        axios.get(actions.address+"api/list/")
            .then(response => {
                dispatch({
                    type : actionTypes.GET_LIST,
                    users: response.data
                })
            })
            .catch(err => {
            console.log(err)
            })
    }
}

export const ObjectSaveUp = (token, name, description) => {
    return dispatch => {
      
      axios.post( actions.address + "api/object/",{
        token : token,
        name : name,
        description : description
      }).then(response => {
          dispatch({
              type : actionTypes.SAVE_OBJECT
          })
          console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    };
  
  }

export const getObjects = (token) => {
    return dispatch => {

        axios.get(actions.address+"api/list_object/" + token + "/")
            .then(response => {
                dispatch({
                    type : actionTypes.LIST_OBJECT,
                    objects: response.data
                })
            })
            .catch(err => {
            console.log(err)
            })
    }
}