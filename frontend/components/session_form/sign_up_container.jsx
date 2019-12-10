import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mSTP = () => ({
    formType: "sign up"
})

const mDTP = dispatch => ({
    action: (user) => dispatch(signup(user)),
})

export default connect(mSTP, mDTP)(SessionForm);