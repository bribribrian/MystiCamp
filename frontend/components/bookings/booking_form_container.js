import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
 
const mSTP = state => {
    return {
        currentUserId: state.session.id
    };
};

const mDTP = dispatch => ({
    createBooking: booking => dispatch(createBooking(booking)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(BookingForm);