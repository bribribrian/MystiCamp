import * as ListingAPIutil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

export const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
});

export const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
})



export const fetchListings = () => dispatch => (
    ListingAPIutil.fetchListings()
    .then(listings => dispatch(receiveListings(listings)))
);

export const fetchListing = listingId => dispatch => (
    ListingAPIutil.fetchListing(listingId)
    .then(listing => dispatch(receiveListing(listing)))
);