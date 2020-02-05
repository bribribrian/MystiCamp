import { connect } from 'react-redux';
import { fetchUser }  from '../../actions/user_actions';
import UserShow from './user_show';

const mSTP = (state, ownProps) => {
    const user = state.entities.users[state.session.id];
    const bookings = Object.values(user.bookings);
    debugger;
    return {
        user,
        bookings
    };
}

const mDTP = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(UserShow);