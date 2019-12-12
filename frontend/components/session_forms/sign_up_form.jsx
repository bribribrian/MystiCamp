import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';



class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Username...",
            email: "Email adress...",
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
                    <h3>Join Hipcamp</h3>
                    <h4>Discover the best camping near me</h4>
                    </div>
                    <div className='name-inputs'>
                    First name...
                    Last name...
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
                <div className='modal-signup-footer'>
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