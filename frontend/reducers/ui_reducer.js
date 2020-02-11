import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
import FiltersReducer from './filters_reducer';
import LocationReducer from './location_reducer';

const UiReducer = combineReducers({
    modal: ModalReducer,
    filters: FiltersReducer,
    location: LocationReducer
});

export default UiReducer;