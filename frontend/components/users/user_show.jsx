import React from 'react';
import BookingListItem from '../bookings/booking_list_item';

class UserShow extends React.Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        this.props.fetchUserBookings(this.props.match.params.userId);
    }

    formatDate(date) {
        return new Date(date).toLocaleDateString();
    }

    render() {
        debugger;
        if (Object.getOwnPropertyNames(this.props.bookings).length === 0) {
            return (
                null
            )
        }
        return (
        <div className='user-show-container'>
            <div className='user-profile'>
                <div className='user-profile-container'>
                    <div className='user-profile-information'>
                        <div className='user-profile-information-details-1'>
                            <div className='user-profile-icon'><i className="far fa-user"></i></div>
                            <div className='user-username'>{this.props.user.username}</div>
                        </div>
                        <div className='user-profile-information-details-2'>
                            <div className='user-created-at'>Mysticamper since:</div>
                            <div className='user-created-at-date'>{this.formatDate(this.props.user.created_at)}</div>
                        </div>
                    </div>
                    <div className='user-bookings-container'>
                        <div className='user-bookings-title'>Bookings</div>
                        {this.props.bookings.map(booking => (
                            <BookingListItem
                                deleteBooking={this.props.deleteBooking}
                                booking={booking}
                                key={booking.id}
                            />
                        ))}
                    </div>
                    </div>
                </div>
        </div>
        );
    };


};

export default UserShow;