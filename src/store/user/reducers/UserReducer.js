import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    user: {}
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default UserReducer
