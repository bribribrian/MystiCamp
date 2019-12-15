import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';

const ListingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type){
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING:
            const newListing = { [action.listing.id]: action.listing };
            return Object.assign({}, oldState, newListing)
        default:
            return oldState
    }
}

export default ListingsReducer;