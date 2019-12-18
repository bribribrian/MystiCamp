import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';

const ListingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type){
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING:
            newState = Object.assign({}, oldState, { [action.listing.id]: action.listing});
            // const newListing = { [action.listing.id]: action.listing };
            // return newListing;
            return newState;
        default:
            return oldState
    }
}

export default ListingsReducer;