import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import TextField from '../../shared/TextField';

const RegistrationForm = () => {

    const navigate = useNavigate();

    const { t } = useTranslation();

    const validValues = {
        fullName: '',
        phone: '',
        stdId: '',
        level: 'level 1',
        email: '',
        password: '',
        type: 'borrower'
    };

    const errorSchema = Yup.object().shape({
        fullName: Yup.string().required(t('full_name_error')),
        phone: Yup.string().required(t('phone_error')),
        stdId: Yup.string().required(t('std_error')),
        level: Yup.string().required(t('level_error')),
        email: Yup.string().email().required(t('email_error')),
        password: Yup.string().required(t('password_error')),
        type: Yup.string().required(t('type_error'))
    });

    const registrationHandler = (data) => {
        console.log({ data });
        navigate('/otp');
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
                        <label htmlFor='level' className="form-label">{t('level')}</label>
                        <Field as="select" className="form-select mb-3" defaultValue="level 1" name="level">
                            <option value="level 1">{t('level1')}</option>
                            <option value="level 2">{t('level2')}</option>
                        </Field>
                        <ErrorMessage component='small' name='level' className='text-danger fw-bold' />
                        <TextField label={t('email')} name='email' type='email' />
                        <TextField label={t('password')} name='password' type='password' />
                        <label htmlFor='type' className="form-label">{t('type')}</label>
                        <Field as="select" className="form-select mb-3" defaultValue="borrower" name="type">
                            <option value="borrower">{t('borrower')}</option>
                            <option value="lender">{t('lender')}</option>
                        </Field>
                        <ErrorMessage component='small' name='type' className='text-danger fw-bold' />
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
