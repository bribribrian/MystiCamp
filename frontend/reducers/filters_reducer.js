import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = {
    bounds: {}
}

const FiltersReducers = (state = defaultFilters, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_FILTER:
            const newState = Object.assign({}, state, {bounds: action.value});
            return newState;
        default:
            return state;
    }
};

export default FiltersReducers;