import { RECEIVE_LOCATION } from '../actions/map_actions'

const LocationReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LOCATION:
            return Object.assign({}, action.geoLocation)
        default:
            return oldState;
    }
}

export default LocationReducer;