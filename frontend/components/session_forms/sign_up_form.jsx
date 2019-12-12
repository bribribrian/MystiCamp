import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';



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

    render() {
        return (
            <div className='modal-content'>
                <div className='modal-body'>
                    <div className='modal-form'>
                        <div className='signup-form'>
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-greet'>
                                    <div className='form-welcome'>Join Hipcamp</div>
                                    <div className='form-welcome-subtitle'>Discover the best camping near me</div>
                                </div>
                                <div className='name-inputs'>
                                    <input className='f-name-input' type="text" placeholder="First name..."
                                        value={this.state.f_name}
                                        onChange={this.update('f_name')}
                                    />
                                    <input className='l-name-input' type="text" placeholder="Last name..."
                                        value={this.state.l_name}
                                        onChange={this.update('l_name')}
                                    />
                                </div>
                                <input type="text" placeholder="Email address..."
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                                <input type="text" placeholder="Username..."
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                                <input type="password" placeholder="Password..."
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                                <br/>
                                <input className='submit-button-style' type="submit" value="Join Hipcamp" />
                                <div className='modal-footer'>
                                    <div className='footer-question'>Already a Hipcamper?
                                        <Link className='footer-link' to='/login'>Log in!</Link>
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
    formType: "sign up"
});

const mDTP = dispatch => ({
    action: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SignUpForm);