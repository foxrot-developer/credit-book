import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    user: {}
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        case actionTypes.LOGOUT_USER:
            return {
                isLoggedIn: false,
                user: {}
            };
        default:
            return state;
    }
}

export default UserReducer
