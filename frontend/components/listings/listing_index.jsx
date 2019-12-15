import React from 'react';
import ListingIndexItem from './listing_index_item';


class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchListings();

    }

    render() {
        if (Object.getOwnPropertyNames(this.props.listings).length === 0) {
            return (
                null
            )
        }
        
        return (
        <div>
            <h1>Listings</h1>
            {this.props.listings.map(listing => (
                <ListingIndexItem
                    listing={listing}
                    key={listing.id}
                />
            ))}
        </div>
        )
    }
}

export default ListingIndex;