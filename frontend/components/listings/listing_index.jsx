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
        <div className='index-main'>
            <div className='index-container'>
                <div className='top-content'>
                    <div className='sub-header-one'>Find yourself outside.</div>
                    <div className='sub-header-two'>Book unique camping experiences on over <span className='sub-header-number'>300,000</span> campsites, cabins, RV parks, public parks and more.</div>
                </div>
                <div className='search-container'>
                    <div className='search-bar-container'>
                        <div className='search-bar-box'>
                            <div className="search-bar-left">
                            <i className="fas fa-search"></i>
                            <div className='search-text'>Search Coming Soon!</div>
                            </div>
                            <div className='clear'> Clear </div>
                        </div>
                    </div>
                    <div className='search-right'>
                        <div className='dates-container'>
                        <i class="far fa-calendar"></i>
                            <div className='dates-text'> Enter dates</div>
                        </div>
                        <div className='category-container'>
                            <i class="fas fa-campground"></i>
                                <div className='category-text'>All camping</div>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div className='search-button-container'>
                            <div className='search'>Search</div>
                        </div>
                    </div>
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