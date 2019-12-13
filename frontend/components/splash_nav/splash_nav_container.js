import { connect } from 'react-redux';
import SplashNav from './splash_nav';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const mSTP = ({ session, entities, errors}) => {
    return{
        currentUser: entities.users[session.id],
        errors: errors
    };
};

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});


export default connect(mSTP, mDTP)(SplashNav)