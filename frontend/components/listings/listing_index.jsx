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
            <div className='index-container'>
                <div className='top-content'>
                    <div className='sub-header-one'>Find yourself outside.</div>
                    <div className='sub-header-two'>Book unique camping experiences on over 300,000 campsites, cabins, RV parks, public parks and more.</div>
                </div>
                <div className='index-title'>Discover camping...</div>
                <div className='index-items-container'>
                    {this.props.listings.map(listing => (
                        <ListingIndexItem
                            listing={listing}
                            key={listing.id}
                        />
                    ))}
                </div>
            </div>
        </div>
        )
    }
}

export default ListingIndex;