import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginForm from '../session_forms/login_form';
import SignUpForm from '../session_forms/sign_up_form';

function Modal({modal, closeModal}) {
 if (!modal) {
     return null;
 }
 let component;
 switch (modal) {
    case 'login':
        component = <LoginForm />;
        break;
    case 'signup':
        component = <SignUpForm />
        break;
    default:
        return null;
 }
 return (
    <div className='modal-background' onClick={closeModal}>
        <div className='modal-child'onClick={e => e.stopPropagation()}>
             { component }
        </div>
    </div>
 );
}

const mSTP = (state) => {
    return {
        modal: state.ui.modal
    };
};

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(Modal);
