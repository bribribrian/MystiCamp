import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_reducer';
import BookingErrorsReducer from './booking_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    bookings: BookingErrorsReducer,
});

export default ErrorsReducer;