import * as actionTypes from './actionTypes';
import Axios from '../../../axios/Axios';
import Toast from '../../../shared/Toast';
import { userLogout } from '../../StoreIndex';

export const allLenderPendingRequests = () => dispatach => {
    Axios.get('loan-api/request/status?status=APPROVED')
        .then(response => {
            const pendingRequests = response.data.data.filter(request => !request.lenderID);
            dispatach({
                type: actionTypes.ALL_LENDER_REQUESTS,
                payload: pendingRequests
            });
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.message);
        });
};

export const lenderAcceptedRequests = (id) => dispatch => {
    Axios.get(`loan-api/request/search?lenderID=${id}`)
        .then(response => {
            dispatch({
                type: actionTypes.LENDER_ACCEPTED_REQUESTS,
                payload: response.data.data
            });
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.message);
        });
};

export const acceptRequest = (data, reqId, userId) => dispatach => {
    Axios.post(`loan-api/payment/create-payment-for-admin-by-lender/${reqId}/${userId}`, data)
        .then(response => {
            dispatach(allLenderPendingRequests());
            dispatach(lenderAcceptedRequests(userId));
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.message);
        });
};

export const lenderLogout = (navigate) => dispatch => {
    dispatch({
        type: actionTypes.LENDER_LOGOUT,
    });
    dispatch(userLogout(navigate));
};