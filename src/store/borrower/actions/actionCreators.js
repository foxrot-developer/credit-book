import * as actionTypes from './actionTypes';
import Axios from '../../../axios/Axios';
import Toast from '../../../shared/Toast';
import { userLogout } from '../../StoreIndex';

export const allBorrowerRequests = id => dispatch => {
    Axios.get(`loan-api/request/search?borrowerID=${id}`)
        .then(response => {
            dispatch({
                type: actionTypes.ALL_BORROWER_REQUESTS,
                payload: response.data.data
            });
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.message);
        });
};

export const addNewRequest = (data) => dispatch => {
    Axios.post('loan-api/request', data)
        .then(response => {
            dispatch(allBorrowerRequests(data.borrowerID));
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.message);
        });
};

export const returnAmount = (id, userId) => dispatch => {
    const data = {
        status: "RETURN"
    };
    Axios.patch(`loan-api/request/${id}`, data)
        .then(response => {
            dispatch(allBorrowerRequests(userId));
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.message);
        });
};

export const borrowerLogout = (navigate) => dispatch => {
    dispatch({
        type: actionTypes.BORROWER_LOGOUT,
    });
    dispatch(userLogout(navigate));
};