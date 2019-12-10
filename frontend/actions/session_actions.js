import * as SessionAPIutil from '../util/session_api_util';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


const receiveErrors = errors => {
    return {
    type: RECEIVE_SESSION_ERRORS,
    errors
    }
};

const receiveCurrentUser = (currentUser) => {
    return {
    type: RECEIVE_CURRENT_USER,
    currentUser
    }
};

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const signup = (user) => dispatch => (
    SessionAPIutil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.repsonseJSON))
    )
);

export const login = (user) => dispatch => (
    SessionAPIutil.login(user)
    .then(
        (user) => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
    )
);

export const logout = () => dispatch => (
    SessionAPIutil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);