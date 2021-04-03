import axios from "axios";
import * as actions from "../actions/auth";
import { GET_LIST } from "../actions/authTypes";

const initialState = {
    users : [],
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_LIST:
            return{
                ...state,
                users: action.users
            };
        default:
            return state;

    }
} 