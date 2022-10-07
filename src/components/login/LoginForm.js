import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

import TextField from '../../shared/TextField';
import '../../assets/css/login-form.css';

const LoginForm = () => {

    const { t } = useTranslation();

    const validValues = {
        email: '',
        password: ''
    };

    const errorSchema = Yup.object().shape({
        email: Yup.string().email().required(t('email_error')),
        password: Yup.string().required(t('password_error'))
    });

    const loginHandler = (data) => {
        console.log({ data });
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
                        <TextField label={t('email')} name='email' type='email' placeholder={t('email_holder')} />
                        <TextField label={t('password')} name='password' type='password' placeholder={t('password_holder')} />
                        <div className='text-end'>
                            <p className='forget-password'>{t('forget')}</p>
                        </div>
                        <Button type='submit' className='w-100 btn btn-dark'>
                            {t('login')}
                        </Button>
                    </Form>
                </React.Fragment>
            )}
        </Formik>
    )
}

export default LoginForm;
