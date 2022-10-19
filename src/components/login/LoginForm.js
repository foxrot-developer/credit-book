import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TextField from '../../shared/TextField';
import '../../assets/css/login-form.css';
import { userLogin } from '../../store/user/actions/actionCreators';

const LoginForm = () => {

    const dispatch = useDispatch();

    const { t } = useTranslation();
    const navigate = useNavigate();

    const validValues = {
        email: '',
        password: ''
    };

    const errorSchema = Yup.object().shape({
        email: Yup.string().email().required(t('email_error')),
        password: Yup.string().required(t('password_error'))
    });

    const loginHandler = (values) => {
        const data = {
            email: values.email,
            password: values.password
        }
        dispatch(userLogin(data, navigate));
        // navigate('/dashboard/borrower');
    }

    return (
        <Formik
            initialValues={validValues}
            validationSchema={errorSchema}
            onSubmit={loginHandler}
        >
            {(formik) => (
                <React.Fragment>
                    <Form>
                        <TextField label={t('email')} name='email' type='email' />
                        <TextField label={t('password')} name='password' type='password' />
                        <div className='text-end'>
                            <p className='forget-password'>{t('forget')}</p>
                        </div>
                        <div className='text-center'>
                            <Button type='submit' className='px-5 btn custom-btn'>
                                {t('login')}
                            </Button>
                        </div>
                    </Form>
                </React.Fragment>
            )}
        </Formik>
    )
}

export default LoginForm;
