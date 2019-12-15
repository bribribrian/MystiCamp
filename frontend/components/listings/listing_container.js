import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions'
import ListingIndex from './listing_index';

const mSTP = state => {

    let allListings = Object.values(state.entities.listings);
    return ({
        listings: allListings,
    })
};

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings())
});

export default connect(mSTP, mDTP)(ListingIndex)

