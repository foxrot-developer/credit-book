import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Modal, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import TextField from '../../shared/TextField';
import { addWalletAmount } from '../../store/StoreIndex';

const AddAmountModal = (props) => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const user = useSelector(state => state.user.user);

    const validValues = {
        amount: '',
    };

    const errorSchema = Yup.object().shape({
        amount: Yup.number().min(200, t('min_amount')).required(t('req_amount')),
    });

    const addRequestHandler = (values) => {
        const data = {
            id: user.id,
            amount: +values.amount
        };
        dispatch(addWalletAmount(data, props.onHide));
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
                    {t('add_amount')}
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
                                            {t('submit')}
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

export default AddAmountModal;
