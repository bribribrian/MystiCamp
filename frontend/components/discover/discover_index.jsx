import React from 'react';
import ListingIndexItem from '../listings/listing_index_item';

class DiscoverIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listings = this.props.listings.map(listing => {
            return <ListingIndexItem key={listing.id} listing={listing} />
        });

        return (
            <div className='discover-list'>
                {listings}
            </div>
        );
    };

};

export default DiscoverIndex;
