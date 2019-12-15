import { connect } from 'react-redux';
import { fetchListing }  from '../../actions/listing_actions';
import ListingShow from './listing_show';

const mSTP = (state) => {
    const listingId = parseInt(match.params.listingId);

    return {
        listingId
    };
}

const mDTP = dispatch => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId))
});

export default connect(mSTP, mDTP)(ListingShow);