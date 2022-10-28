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

export const adminLogout = () => dispatch => {
    dispatch({
        type: actionTypes.ADMIN_LOGOUT
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
            dispatch(getAllRequests());
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const getInitiatedRequests = () => dispatch => {
    Axios.get('loan-api/request/status?status=INITIATED')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_INITIATED_REQUESTS,
                payload: response.data.data
            });
            dispatch(getPendingRequests());
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const getBorrowedRequests = () => dispatch => {
    Axios.get('loan-api/request/status?status=BORROWED')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_BORROWED_REQUESTS,
                payload: response.data.data
            });
            dispatch(getPendingRequests());
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const getReturnRequests = () => dispatch => {
    Axios.get('loan-api/request/status?status=RETURN')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_RETURN_REQUESTS,
                payload: response.data.data
            });
            dispatch(getAllRequests());
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const getCompletedRequests = () => dispatch => {
    Axios.get('loan-api/request/status?status=COMPLETED')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_COMPLETED_REQUESTS,
                payload: response.data.data
            });
            dispatch(getAllRequests());
            dispatch(getReturnRequests());
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const createInvoice = (data, id) => dispatch => {
    Axios.post(`loan-api/payment/create-payment-for-borrower-by-admin/${id}`, data)
        .then(response => {
            dispatch(getInitiatedRequests());
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log(error);
            Toast.error(error.message);
        });
};

export const addMoneyRequest = data => dispatch => {
    Axios.post('loan-api/request', data)
        .then(response => {
            dispatch(getAllRequests());
            dispatch(getPendingRequests());
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const statusUpdate = (data, id) => dispatch => {
    console.log({ data });
    Axios.put(`loan-api/request/${id}?status=${data.status}`)
        .then(response => {
            dispatch(getAllRequests());
            dispatch(getPendingRequests());
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};

export const updateRequestStatus = (data, id) => dispatch => {
    Axios.post(`loan-api/payment/create-payment-for-lender-by-admin/${id}`, data)
        .then(response => {
            dispatch(getAllRequests());
            dispatch(getPendingRequests());
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};


// Wallet Requests
export const getAllWallets = () => dispatch => {
    Axios.get('loan-api/wallet')
        .then(response => {
            dispatch({
                type: actionTypes.ALL_WALLETS,
                payload: response.data.data
            });
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};