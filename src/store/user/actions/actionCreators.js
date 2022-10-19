import * as actionTypes from './actionTypes';
import Axios from '../../../axios/Axios';
import Toast from '../../../shared/Toast';

export const userRegistration = (data, navigate) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    Axios.post('loan-api/auth/register', data, config)
        .then(response => {
            navigate('/otp');
            Toast.success('Enter OTP');
        })
        .catch(error => {
            console.log({ error });
            Toast.error(error.message);
        });
};