import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState);
            newState[action.currentUser.id] = action.currentUser;
            return newState;
        case RECEIVE_USERS:
            return Object.assign({}, action.users)
        case RECEIVE_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user} )
        default:
            return oldState
    }
}


export default UsersReducer;