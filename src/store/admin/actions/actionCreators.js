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
    Axios.post('https://api.moyasar.com/v1/invoices', data, {
        auth: {
            username: 'sk_test_4FPE8X1yNL8woAbtdrYQ1CZFpqkdCn9pdGDsumt8'
        }
    })
        .then(response => {
            const paymentData = {
                "id": "760878ec-d1d3-5f72-9056-191683f55872",
                "status": "paid",
                "amount": data.amount,
                "fee": 1580,
                "currency": "SAR",
                "refunded": 0,
                "refunded_at": null,
                "captured": 0,
                "captured_at": null,
                "voided_at": null,
                "description": null,
                "amount_format": "885.71 SAR",
                "fee_format": "15.80 SAR",
                "refunded_format": "0.00 SAR",
                "captured_format": "0.00 SAR",
                "invoice_id": response.data.id,
                "ip": null,
                "callback_url": "http://localhost:3000/",
                "created_at": "2016-05-11T17:04:17.000Z",
                "updated_at": "2016-05-12T17:04:19.633Z",
                "metadata": null,
                "source": {
                    "type": "creditcard",
                    "company": "visa",
                    "name": "Abdulaziz Alshetwi",
                    "number": "4111111111111111",
                    "cvc": "123",
                    "month": "12",
                    "year": "25",
                    "message": null,
                    "transaction_url": null,
                    "gateway_id": "moyasar_cc_ce1iUidxhrh74257S891wvW",
                    "reference_number": "125478454231"
                }
            };
            Axios.post('https://api.moyasar.com/v1/payments', paymentData, {
                auth: {
                    username: 'sk_test_4FPE8X1yNL8woAbtdrYQ1CZFpqkdCn9pdGDsumt8'
                }
            })
                .then(payResponse => {
                    const params = {
                        status: "BORROWED"
                    };
                    Axios.patch(`loan-api/request/${id}`, params)
                        .then(finalResp => {
                            dispatch(getInitiatedRequests());
                            Toast.success(finalResp.data.message);
                        })
                        .catch(error => {
                            console.log(error);
                            Toast.error(error.message);
                        });
                })
                .catch(error => {
                    console.log(error);
                    Toast.error(error.message);
                });
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

export const updateRequestStatus = (data, id) => dispatch => {
    Axios.patch(`loan-api/request/${id}`, data)
        .then(response => {
            dispatch(getAllRequests());
            dispatch(getPendingRequests());
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