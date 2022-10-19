import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    user: {},
    allUsers: []
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        case actionTypes.ALL_USERS:
            return {
                ...state,
                allUsers: action.payload
            };
        default:
            return state;
    }
}

export default UserReducer
