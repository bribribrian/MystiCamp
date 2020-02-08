import { connect } from 'react-redux';
import { fetchUser }  from '../../actions/user_actions';
import UserShow from './user_show';
import { fetchUserBookings,deleteBooking } from '../../actions/booking_actions';

const mSTP = (state, ownProps) => {
    const user = state.entities.users[state.session.id];
    // const bookings = Object.values(user.bookings);
    // return {
    //     user,
    //     bookings
    // };
    const bookings = Object.values(state.entities.bookings);
    debugger;
    return ({
        user,
        bookings
    })
}

const mDTP = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUserBookings: (userId) => dispatch(fetchUserBookings(userId)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))

});

export default connect(mSTP, mDTP)(UserShow);