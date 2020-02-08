import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
// import UsersReducer from './users_reducer';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import UiReducer from './ui_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    // users: UsersReducer,
    errors: ErrorsReducer,
    entities: EntitiesReducer,
    ui: UiReducer,
});

export default RootReducer;