import { connect } from 'react-redux';
import { fetchListing }  from '../../actions/listing_actions';
import ListingShow from './listing_show';

const mSTP = (state, ownProps) => {
    const listing = state.entities.listings[ownProps.match.params.listingId];
    const listings = state.entities.listings
    return {
        listing,
        listings
    };
}

const mDTP = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId))
});

export default connect(mSTP, mDTP)(ListingShow);