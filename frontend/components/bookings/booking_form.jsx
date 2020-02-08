import React from 'react';
import { withRouter } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

class BookingForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user_id: this.props.currentUserId,
            listing_id: this.props.match.params.listingId,
            start_date: null,
            end_date: null,
            focusedStart: null,
            focusedEnd: null,
            num_guests: 1
        }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isHighlighted = this.isHighlighted.bind(this);
    this.handleGuestUpdate = this.handleGuestUpdate.bind(this);
    }

    handleGuestUpdate(num) {
        this.setState({
            num_guests: num
        });
    };

    isHighlighted(day) {
        return day.isSame(this.state.startDate)
      }

    handleSubmit(e) {
        e.preventDefault();
        const listingId = this.state.listing_id;
        let totalPrice;

        // if (!(this.state.start_date && this.state.end_date)) {
        //     totalPrice = 0
        // } else {
        //     const startDate = Date.parse(this.state.start_date);
        //     const endDate = Date.parse(this.state.end_date);
        //     const numDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        //     totalPrice = numDays * this.props.listing.cost
        // }
        totalPrice = 10.99;
        
        
        if (!this.props.currentUserId) {
            this.props.openModal('login')
        } else {
            if (!(this.state.start_date) || !(this.state.end_date)) {
                console.log('Booking must have a start and end date!');
                return 'Booking must have a start and end date!';
            };
            const booking = {user_id: this.state.user_id, listing_id: listingId, total_price: totalPrice, num_guests: this.state.num_guests, start_date: this.state.start_date.format('YYYY/MM/DD'),  end_date: this.state.end_date.format('YYYY/MM/DD')};
            this.props.createBooking(booking).then(this.props.history.push(`/users/${this.state.user_id}`));
        };
    }


    render () {

        return(
        <div className='booking-form-container'>
            <form className='booking-form' onSubmit={this.handleSubmit}>
            <div className='date-input-container'>
                <SingleDatePicker
                placeholder="Check in"
                date={this.state.start_date}
                onDateChange={start_date => this.setState({ start_date })}
                focused={this.state.focusedStart}
                numberOfMonths={1}
                verticalSpacing={0}
                noBorder={true}
                daySize={36}
                hideKeyboardShortcutsPanel
                onFocusChange={({ focused }) => this.setState({ focusedStart: focused })}
                id="booking_start_date"
                />
                <SingleDatePicker
                placeholder="Check out"
                date={this.state.end_date}
                onDateChange={end_date => this.setState({ end_date })}
                focused={this.state.focusedEnd}
                isDayHighlighted={day => this.isHighlighted(day)}
                numberOfMonths={1}
                verticalSpacing={0}
                noBorder={true}
                daySize={36}
                hideKeyboardShortcutsPanel
                onFocusChange={({ focused }) => this.setState({ focusedEnd: focused })}
                id="booking_end_date"
                />
                <div className='dates-third'>
                    <div className='dates-first-title'>Guests</div>
                    <div className='dates-first-sub'><span>-</span> 4 <span>+</span></div>
                </div>
            </div>
            <div className='booking-container'>
                <button className='book-button'>Book now</button>
            </div>
            </form>
        </div>
        )
    }  
}

export default withRouter(BookingForm);