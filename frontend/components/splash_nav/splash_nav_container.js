import { connect } from 'react-redux';
import SplashNav from './splash_nav';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const mSTP = ({ session, entities}) => {
    return{
        currentUser: entities.users[session.id]
    };
};

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});


export default connect(mSTP, mDTP)(SplashNav)