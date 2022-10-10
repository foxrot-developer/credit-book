import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

import TextField from '../../shared/TextField';

const OtpForm = () => {

    const { t } = useTranslation();

    const validValues = {
        otp: ''
    };

    const errorSchema = Yup.object().shape({
        otp: Yup.string().email().required(t('otp_error'))
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
                        <TextField label={t('otp')} name='otp' type='text' />
                        <div className='text-center'>
                            <Button type='submit' className='px-5 btn custom-btn'>
                                {t('submit')}
                            </Button>
                        </div>
                    </Form>
                </React.Fragment>
            )}
        </Formik>
    )
}

export default OtpForm;
