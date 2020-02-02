import { fetchListings } from './listing_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (value) => ({
    type: UPDATE_FILTER,
    value
});

export const updateFilter = (value) => (dispatch, getState) => {
    dispatch(changeFilter(value));
    return fetchListings(getState().ui.filters)(dispatch);
};