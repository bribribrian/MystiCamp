import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';



class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            <div className='signup-form'>
              <form onSubmit={this.handleSubmit}>
                MystiCamp
                <br/>
                Sign Up!
                <br/>
                <label>
                    Username:
                    <input type="text" 
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
                <label>
                    Email:
                    <input type="text" 
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                </label>
                <label>
                    Password:
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                </label>
                <br/>
                <input type="submit" value="Sign Up!" />
              </form>
              <h3>Already a Hipcamper?</h3>
              <Link to='/login'>Log in!</Link>
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