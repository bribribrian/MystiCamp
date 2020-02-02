import { RECIEVE_LOCATION } from '../actions/map_actions'

const locationReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECIEVE_LOCATION:
            return Object.assign({}, action.geoLocation)
        default:
            return oldState;
    }
}

export default locationReducer;