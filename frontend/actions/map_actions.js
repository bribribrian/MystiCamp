export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export const receiveLocation = (geoLocation) => ({
    type: RECEIVE_LOCATION,
    geoLocation
})