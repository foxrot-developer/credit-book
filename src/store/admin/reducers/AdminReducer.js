import * as actionTypes from '../actions/actionTypes';

const initialState = {
    allUsers: [],
    allRequests: [],
    allPendingRequests: [],
    allWallets: []
};

const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ALL_USERS:
            return {
                ...state,
                allUsers: action.payload
            };
        case actionTypes.ALL_REQUESTS:
            return {
                ...state,
                allRequests: action.payload
            };
        case actionTypes.ALL_PENDING_REQUESTS:
            return {
                ...state,
                allPendingRequests: action.payload
            };
        case actionTypes.ALL_WALLETS:
            return {
                ...state,
                allWallets: action.payload
            };
        case actionTypes.ADMIN_LOGOUT:
            return {
                allUsers: [],
                allRequests: [],
                allPendingRequests: [],
                allWallets: []
            };
        default:
            return state;
    }
}

export default AdminReducer
