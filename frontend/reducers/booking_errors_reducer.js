import { RECEIVE_BOOKING_ERRORS, RECEIVE_BOOKING } from "../actions/booking_actions";

const BookingErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_BOOKING_ERRORS:
            return action.errors
        case RECEIVE_BOOKING:
            return [];
        default:
            return oldState;
    }
};

export default BookingErrorsReducer;