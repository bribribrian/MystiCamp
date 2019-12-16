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
                <div className='index-title'>Discover camping...</div>
                <div className='index-items-container'>
                    {this.props.listings.map(listing => (
                        <ListingIndexItem
                            listing={listing}
                            key={listing.id}
                        />
                    ))}
                </div>
                <div className='filler-content'>filler content</div>
            </div>
        </div>
        )
    }
}

export default ListingIndex;