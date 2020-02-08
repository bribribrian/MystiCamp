import React from 'react';
import BookingListItem from '../bookings/booking_list_item';

class UserShow extends React.Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        this.props.fetchUserBookings(this.props.match.params.userId);
    }

    render() {
        if (Object.getOwnPropertyNames(this.props.bookings).length === 0) {
            return (
                null
            )
        }
        return (
        <div className='user-show-container'>
            <div className='user-profile'>
                <div className='user-username'>{this.props.user.username}</div>
                <div className='user-bookings-container'>
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
        );
    };


};

export default UserShow;