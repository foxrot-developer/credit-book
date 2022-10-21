import * as actionTypes from './actionTypes';
import Axios from '../../../axios/Axios';
import Toast from '../../../shared/Toast';

export const getAllUsers = () => dispatch => {
    Axios.get('loan-api/user')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_USERS,
                payload: response.data.data
            });
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const deleteUser = userId => dispatch => {
    Axios.delete(`loan-api/user/${userId}`)
        .then(response => {
            dispatch(getAllUsers());
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const updateUser = (data, userId) => dispatch => {
    console.log({ data, userId });
    Axios.patch(`loan-api/user/${userId}`, data)
        .then(response => {
            dispatch(getAllUsers());
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

// Money Requests

export const getAllRequests = () => dispatch => {
    Axios.get('loan-api/request')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_REQUESTS,
                payload: response.data.data
            });
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const getPendingRequests = () => dispatch => {
    Axios.get('loan-api/request/status?status=PENDING')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_PENDING_REQUESTS,
                payload: response.data.data
            });
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const addMoneyRequest = data => dispatch => {
    Axios.post('loan-api/request', data)
        .then(response => {
            dispatch(getAllRequests());
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const updateRequestStatus = (data, id) => dispatch => {
    Axios.patch(`loan-api/request/${id}`, data)
        .then(response => {
            dispatch(getAllRequests());
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};