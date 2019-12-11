import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
// import UsersReducer from './users_reducer';
import SessionErrorsReducer from './session_errors_reducer.js';
import EntitiesReducer from './entities_reducer';
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    // users: UsersReducer,
    errors: SessionErrorsReducer,
    entities: EntitiesReducer,
    ui: UIReducer,
});

export default RootReducer;