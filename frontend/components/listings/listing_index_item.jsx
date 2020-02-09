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
        const { title, description, thumbnail } = this.props.listing;
        return (
            <div className='listing-index-item' onClick={this.handleClick}>
                <div className='listing-index-item-details-container'>
                    <img className='thumbnail' src={window[thumbnail]}/>
                    <div className='thumbnail-text'>
                        <span className='thumbnail-title'>{title}</span>
                        <span className='thumbnail-subtitle'>Check out {this.props.listing.title}!</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ListingIndexItem);