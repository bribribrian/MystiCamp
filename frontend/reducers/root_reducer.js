import { combineReducers } from 'redux';
import SessionsReducer from './session_reducer';
import UsersReducer from './users_reducer';

const RootReducer = combineReducers({
    sessions: SessionsReducer,
    users: UsersReducer
});

export default RootReducer;