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
                    <div className='login-form'>
                        {/* <div className='login-form-body'> */}
                            <form onSubmit={this.handleSubmit}>
                                <div className='login-greet'>
                                    <h3>Welcome back!</h3>
                                    <h4>It's about time for another camping trip</h4>
                                </div>
                                <br/>
                                <label>
                                    Username:
                                    <input type="text" 
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                    />
                                </label>
                                <br/>
                                <label>
                                    Password:
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                    />
                                </label>
                                <br/>
                                <input type="submit" value="Sign in!" />
                            </form>
                        {/* </div> */}
                    </div>
                </div>
                <h3>Don't have a Hipcamp account?
                <Link to='/signup'>Sign up!</Link>
                </h3>
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
