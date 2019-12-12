import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';



class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            f_name: 'First name...',
            l_name: 'Last name...',
            username: "Username...",
            email: "Email address...",
            password: "Password...",
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
                <div className='signup-form'>
                <form onSubmit={this.handleSubmit}>
                    <div className='signup-greet'>
                        <div className='signup-welcome'>Join Hipcamp</div>
                        <div className='signup-welcome-subtitle'>Discover the best camping near me</div>
                    </div>
                    <div className='name-inputs'>
                        <input className='f-name-input' type="text" 
                            value={this.state.f_name}
                            onChange={this.update('f_name')}
                        />
                        <input className='l-name-input' type="text" 
                            value={this.state.l_name}
                            onChange={this.update('l_name')}
                        />
                    </div>
                    <label>
                        <input type="text" 
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>
                        <input type="text" 
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <label>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <br/>
                    <input type="submit" value="Sign Up!" />
                </form>
                </div>
                </div>
                <div className='modal-footer'>
                    <h3>Already a Hipcamper?
                    <Link to='/login'>Log in!</Link>
                    </h3>
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