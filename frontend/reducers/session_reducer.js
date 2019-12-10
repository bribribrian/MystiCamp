import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";


const SessionsReducer = (oldState = { id: null }, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return oldState
        default:
            return oldState
    }
}


export default SessionsReducer;