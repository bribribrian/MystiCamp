import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitDemo = this.handleSubmit.bind(this);
    }
    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.action(user)
        .then(this.props.closeModal);
    }
    
    render() {
        return (
            <div className='modal-content'>
                <div className='modal-body'>
                    <div className='modal-form'>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-greet'>
                                    <div className='form-welcome'>Welcome back!</div>
                                    <div className='form-welcome-subtitle'>It's about time for another camping trip</div>
                                </div>
                                <br/>
                                <button className='facebook-button'>Log in with Facebook</button>
                                <div className='or-style'>
                                    <hr/>
                                    <div className='or'>
                                        or
                                    </div>
                                </div>
                                <input className='username-input' type="text" placeholder="Username..."
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                                <br/>
                                <input type="password" placeholder="Password..."
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                                <div className="form-question-login">
                                Forgot your password?
                                </div>
                            <br/>
                            <input className='submit-button-style' type="submit" value="Log In" />
                            <button className='demo-user-login' onClick={() => {this.state = { username: 'Demo_User', password: 'password'}}}>Demo user!</button>
                            <div className='modal-footer'>
                                <div className='footer-question'>Don't have a Hipcamp account?
                                    <Link className='footer-link' to='/signup'> Sign up!</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        );
    }
}

const mSTP = ({ errors }) => {
    return{
        errors: errors,
        formType: 'login',
    };
};

const mDTP = dispatch => {
    return {
        action: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(LoginForm);
