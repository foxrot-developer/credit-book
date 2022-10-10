import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Col, Row } from 'react-bootstrap';
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
        national: '',
        level: 'level 1',
        email: '',
        password: '',
        type: 'borrower'
    };

    const errorSchema = Yup.object().shape({
        fullName: Yup.string().required(t('full_name_error')),
        phone: Yup.string().required(t('phone_error')),
        stdId: Yup.string().required(t('std_error')),
        national: Yup.string().required(t('national_error')).min(10, t('national_length')).max(10, t('national_length')),
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
                        <Row>
                            <Col xs='12' lg='4'>
                                <TextField label={t('full_name')} name='fullName' type='text' />
                            </Col>
                            <Col xs='12' lg='4'>
                                <TextField label={t('phone')} name='phone' type='text' />
                            </Col>
                            <Col xs='12' lg='4'>
                                <TextField label={t('std')} name='stdId' type='text' style={{ textTransform: 'uppercase' }} />
                            </Col>
                            <Col xs='12' lg='4'>
                                <TextField label={t('national')} name='national' type='text' />
                            </Col>
                            <Col xs='12' lg='4'>
                                <label htmlFor='level' className="form-label">{t('level')}</label>
                                <Field as="select" className="form-select mb-3" defaultValue="level 1" name="level">
                                    <option value="level 1">{t('level1')}</option>
                                    <option value="level 2">{t('level2')}</option>
                                </Field>
                                <ErrorMessage component='small' name='level' className='text-danger fw-bold' />
                            </Col>
                            <Col xs='12' lg='4'>
                                <TextField label={t('email')} name='email' type='email' />
                            </Col>
                            <Col xs='12' lg='4'>
                                <TextField label={t('password')} name='password' type='password' />
                            </Col>
                            <Col xs='12' lg='4'>
                                <label htmlFor='type' className="form-label">{t('type')}</label>
                                <Field as="select" className="form-select mb-3" defaultValue="borrower" name="type">
                                    <option value="borrower">{t('borrower')}</option>
                                    <option value="lender">{t('lender')}</option>
                                </Field>
                                <ErrorMessage component='small' name='type' className='text-danger fw-bold' />
                            </Col>
                        </Row>
                        <div className='text-center'>
                            <Button type='submit' className='btn custom-btn px-5'>
                                {t('register')}
                            </Button>
                        </div>
                    </Form>
                </React.Fragment>
            )}
        </Formik>
    )
}

export default RegistrationForm;
