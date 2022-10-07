import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

import TextField from '../../shared/TextField';

const RegistrationForm = () => {

    const { t } = useTranslation();

    const validValues = {
        fullName: '',
        phone: '',
        stdId: '',
        email: '',
        password: ''
    };

    const errorSchema = Yup.object().shape({
        fullName: Yup.string().required(t('full_name_error')),
        phone: Yup.string().required(t('phone_error')),
        stdId: Yup.string().required(t('std_error')),
        email: Yup.string().email().required(t('email_error')),
        password: Yup.string().required(t('password_error'))
    });

    const registrationHandler = (data) => {
        console.log({ data });
    }

    return (
        <Formik
            initialValues={validValues}
            validationSchema={errorSchema}
            onSubmit={registrationHandler}
        >
            {(formik) => (
                <React.Fragment>
                    <Form>
                        <TextField label={t('full_name')} name='fullName' type='text' />
                        <TextField label={t('phone')} name='phone' type='text' />
                        <TextField label={t('std')} name='stdId' type='text' />
                        <TextField label={t('email')} name='email' type='email' />
                        <TextField label={t('password')} name='password' type='password' />
                        <Button type='submit' className='w-100 btn btn-dark'>
                            {t('register')}
                        </Button>
                    </Form>
                </React.Fragment>
            )}
        </Formik>
    )
}

export default RegistrationForm;
