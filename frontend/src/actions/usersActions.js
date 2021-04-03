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