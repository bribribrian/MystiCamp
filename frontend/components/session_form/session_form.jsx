import React from 'react';

class SessionForm extends React.Component {
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
            </div>
        
        );
    }
}
export default SessionForm;