import * as actionTypes from '../actions/actionTypes';

const initialState = {
    allRequests: [],
    acceptedRequests: []
};

const LenderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ALL_LENDER_REQUESTS:
            return {
                ...state,
                allRequests: action.payload
            };
        case actionTypes.LENDER_ACCEPTED_REQUESTS:
            return {
                ...state,
                acceptedRequests: action.payload
            };
        case actionTypes.LENDER_LOGOUT:
            return {
                allRequests: [],
                acceptedRequests: []
            };
        default:
            return state;
    }
}

export default LenderReducer
