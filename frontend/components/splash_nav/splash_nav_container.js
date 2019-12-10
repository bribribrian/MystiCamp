import { connect } from 'react-redux';
import SplashNav from './splash_nav';
import { logout } from '../../actions/session_actions';


const mSTP = ({ session, users}) => {
    return{
        currentUser: users[session.id]
    };
};

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})


export default connect(mSTP, mDTP)(SplashNav)