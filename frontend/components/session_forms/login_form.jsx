import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);

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
    handleDemoLogin(e) {
        e.preventDefault();
        const user = {username: 'Demo_User', password: 'password'}
        this.props.action(user)
        .then(this.props.closeModal);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.openSignupModal();
    }
    
    render() {
        return (
            <div className='modal-content'>
                <div className='modal-body'>
                    <div className='modal-form'>
                    <div className='form-greet'>
                        <div className='form-welcome'>Welcome back!</div>
                             <div className='form-welcome-subtitle'>It's about time for another camping trip</div>
                        </div>
                        <br/>
                        <button className='facebook-button' onClick={this.handleDemoLogin}>Demo User</button>
                        <div className='or-style'>
                            <hr/>
                            <div className='or'>
                                or
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                                {/* <div className='form-greet'>
                                    <div className='form-welcome'>Welcome back!</div>
                                    <div className='form-welcome-subtitle'>It's about time for another camping trip</div>
                                </div>
                                <br/>
                                <button className='facebook-button' onClick={this.handleDemoLogin}>Demo User</button>
                                <div className='or-style'>
                                    <hr/>
                                    <div className='or'>
                                        or
                                    </div>
                                </div> */}
                            <input className='username-input' type="text" placeholder="Username..."
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                            <br/>
                            <input type="password" placeholder="Password..."
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                            <div className="signup-spaceholder" />
                            {/* <div className="form-question-login">
                            Forgot your password?
                            </div> */}
                            <br/>
                            <input className='submit-button-style' type="submit" value="Log In" />
                            {/* <button className='demo-user-login' onClick={() => {this.state = { username: 'Demo_User', password: 'password'}}}>Demo user!</button> */}
                            <div className='modal-footer'>
                                <div className='footer-question'>Don't have a Hipcamp account?
                                    {/* <Link className='footer-link' to='/signup'> Sign up!</Link> */}
                                    {/* <a className='footer-link' onClick={() => {this.setState({ ui: {modal: 'signup'}})}}> Sign up!</a> */}
                                    <a className='footer-link' onClick={this.handleClick}> Sign up!</a>  
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
        errors: errors
    };
};

const mDTP = dispatch => {
    return {
        action: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openSignupModal: () => dispatch(openModal('signup'))
    };
};

export default connect(mSTP, mDTP)(LoginForm);
