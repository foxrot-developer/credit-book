import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Modal, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import TextField from '../../../shared/TextField';
import { addNewRequest } from '../../../store/StoreIndex';

const NewRequestModal = (props) => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const user = useSelector(state => state.user.user);

    const validValues = {
        amount: '',
    };

    const errorSchema = Yup.object().shape({
        amount: Yup.number().required('Amount is required'),
    });

    const addRequestHandler = (values) => {
        const data = {
            borrowerID: user.id,
            amount: +values.amount,
            status: "PENDING"
        };
        dispatch(addNewRequest(data));
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {t('new_request')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Formik
                        initialValues={validValues}
                        validationSchema={errorSchema}
                        onSubmit={addRequestHandler}
                    >
                        {(formik) => (
                            <React.Fragment>
                                <Form>
                                    <TextField label={t('amount_text')} name='amount' type='number' />
                                    <div className='text-center'>
                                        <Button type='submit' className='px-5 btn custom-btn'>
                                            {t('add_request')}
                                        </Button>
                                    </div>
                                </Form>
                            </React.Fragment>
                        )}
                    </Formik>
                </Container>
            </Modal.Body>
        </Modal >
    )
}

export default NewRequestModal;
