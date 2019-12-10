import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

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
        this.props.action(user);
    }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                MystiCamp
                <br/>
                Sign In!
                <br/>
                <label>
                    Username:
                    <input type="text" 
                        value={this.state.username}
                        onChange={this.update('username')}
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
                <input type="submit" value="Sign in!" />
              </form>
              <h3>Don't have a Hipcamp accout?</h3>
              <Link to='/'>Sign up!</Link>
            </div>
        
        );
    }
}

const mSTP = ({ errors }) => ({
    errors: errors,
    formType: "login"
})

const mDTP = dispatch => ({
    action: (user) => dispatch(login(user)),
})

export default connect(mSTP, mDTP)(LoginForm);
