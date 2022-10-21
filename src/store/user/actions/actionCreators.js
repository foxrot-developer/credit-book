import * as actionTypes from './actionTypes';
import Axios from '../../../axios/Axios';
import Toast from '../../../shared/Toast';

// User Requests

export const userRegistration = (data, navigate) => dispatch => {
    Axios.post('loan-api/auth/register', data)
        .then(response => {
            navigate('/otp', {
                state: {
                    email: data.email
                }
            });
            Toast.success('Enter OTP');
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.message);
        });
};

export const userOtp = (data, navigate) => dispatch => {
    Axios.post('loan-api/auth/verify-otp', data)
        .then(response => {
            navigate('/');
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.message);
        });
};

export const userLogin = (data, navigate) => dispatch => {
    Axios.post('loan-api/auth/login', data)
        .then(response => {
            dispatch({
                type: actionTypes.LOGIN_USER,
                payload: response.data.data
            });
            if (response.data.data.type === "BORROWER") {
                navigate('/dashboard/borrower');
            }
            else if (response.data.data.type === "ADMIN") {
                navigate('/dashboard/admin');
            }
            Toast.success(response.data.message);
        })
        .catch(error => {
            console.log(error.message);
            Toast.error(error.message);
        });
};