import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ListingsReducer from './listings_reducer';
import BookingsReducer from './booking_reducer';


export default combineReducers({
    users: UsersReducer,
    listings: ListingsReducer,
    bookings: BookingsReducer
});

