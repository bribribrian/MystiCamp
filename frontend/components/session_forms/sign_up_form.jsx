import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';



class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            f_name: "",
            l_name: "",
            username: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user)
        .then(() => this.props.closeModal());
    }

    handleClick(e) {
        e.preventDefault();
        this.props.openLoginModal();

    }

    render() {
        return (
            <div className='modal-content'>
                <div className='modal-body'>
                    <div className='modal-form'>
                        <div className='signup-form'>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-greet'>
                                    <div className='form-welcome'>Join Mysticamp</div>
                                    <div className='form-welcome-subtitle'>Discover the best camping near me</div>
                                </div>
                                <div className='name-inputs'>
                                    <input className='f-name-input' type="text" placeholder="First name..."
                                        value={this.state.f_name}
                                        onChange={this.update('f_name')}
                                        required
                                    />
                                    <input className='l-name-input' type="text" placeholder="Last name..."
                                        value={this.state.l_name}
                                        onChange={this.update('l_name')}
                                        required
                                    />
                                </div>
                                <input type="email" placeholder="Email address..."
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    required
                                />
                                <input type="text" placeholder="Username..."
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    required
                                />
                                <input type="password" placeholder="Password..."
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    required
                                />
                                {/* <div className="form-question-signup">
                                <span className='placeholder-box'></span> I'm curious about sharing my land with campers
                                </div> */}
                                <br/>
                                <input className='submit-button-style' type="submit" value="Join Hipcamp" />
                                {/* <button className='demo-user-login' onClick={() => {this.state = { username: 'Demo_User', password: 'password'}}}>Demo user!</button> */}
                                <div className='privacy-policy-agreement'>By signing up, I agree to Mysticamp's</div>
                                 <div className='privacy-policy-agreement-2'>terms and privacy policy.</div>
                                <div className='modal-footer'>
                                    <div className='footer-question'>Already a Mysticamper?
                                        <a className='footer-link' onClick={this.handleClick}>Log In!</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
}

const mSTP = (errors) => ({
    errors: errors,
});

const mDTP = dispatch => ({
    action: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openLoginModal: () =>dispatch(openModal('login'))
});

export default connect(mSTP, mDTP)(SignUpForm);