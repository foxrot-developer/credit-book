import * as actionTypes from '../actions/actionTypes';

const initialState = {
    allRequests: []
};

const BorrowerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ALL_BORROWER_REQUESTS:
            return {
                ...state,
                allRequests: action.payload
            };
        case actionTypes.BORROWER_LOGOUT:
            return {
                allRequests: []
            };
        default:
            return state;
    }
}

export default BorrowerReducer
