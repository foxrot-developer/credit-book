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

export const addNewRequest = (data, onHide) => dispatch => {
    Axios.post('loan-api/request', data)
        .then(response => {
            dispatch(allBorrowerRequests(data.userID));
            onHide();
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.message);
        });
};

export const returnAmount = (id, userId) => dispatch => {
    const data = {
        "currency": "SAR",
        "callback_url": "https://example.com/orders",
        "source": {
            "type": "creditcard",
            "name": "Borrower",
            "number": "4374530018379954",
            "cvc": 123,
            "month": 6,
            "year": 25
        }
    };
    Axios.post(`loan-api/payment/create-payment-for-admin-by-borrower/${id}`, data)
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

export const addWalletAmount = (data, onHide) => dispatch => {
    Axios.post(`loan-api/wallet/${data.id}/${data.amount}`)
        .then(response => {
            onHide();
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.message);
        });
};