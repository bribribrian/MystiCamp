import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function ModalReducer(oldState = null, action) {
    switch(action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        default:
            return oldState;
    }
}