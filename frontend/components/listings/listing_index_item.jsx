import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const listingId = this.props.listing.id;
        this.props.history.push(`/listings/${listingId}`);
    }

    render() {
        const { title, description } = this.props.listing;
        return (
            <div className='listing-index-item' onClick={this.handleClick}>
                <span>Title:</span>
                <br/>
                <span>{title}</span>
                <br/>
            </div>
        );
    }
}

export default withRouter(ListingIndexItem);