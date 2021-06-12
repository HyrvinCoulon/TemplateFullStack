import { GET_LIST, LIST_OBJECT } from "../actions/authTypes";

// Variables used on the site
const initialState = {
    users : [],
    objects : []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case GET_LIST:
            return{
                ...state,
                users: action.users
            };
        case LIST_OBJECT:
            return{
                ...state,
                objects: action.objects
            }
        default:
            return state;
    }
} 