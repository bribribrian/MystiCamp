import React from 'react';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {
        debugger;
        return (
        <div className='user-show-container'>
            <div className='user-profile'>
                <div className='user-username'>{this.props.user.username}</div>
                <div className='user-bookings'>{this.props.bookings[0].id}</div>
            </div>
        </div>
        );
    };


};

export default UserShow;