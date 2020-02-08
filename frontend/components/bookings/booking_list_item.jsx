import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingListItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.deleteBooking(this.props.booking.id);
    };

    render() {
        const { listing_id, start_date, end_date, num_guests, total_price} = this.props.booking;
        return (
            <div className='booking-list-item' >
                {/* <img className='thumbnail' src={window[thumbnail]}/> */}
                <div className='booking-list-item-text-container'>
                    <span className='booking-list-item-title'>{listing_id} from {start_date} through {end_date}</span>
                    <span className='booking-list-item-details'>Number of Guests:{num_guests} Total Cost:{total_price}</span>
                    <button className='cancel-booking-button' onClick={this.handleClick}>Cancel Booking</button>
                </div>
            </div>
        );
    }
}

export default withRouter(BookingListItem);