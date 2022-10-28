import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';

import { allLenderPendingRequests, lenderAcceptedRequests, acceptRequest } from '../../../store/StoreIndex';
import RatingModal from './RatingModal';

function LenderRequestsTable() {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const user = useSelector(state => state.user.user);
    const allRequests = useSelector(state => state.lender.allRequests);
    const acceptedRequests = useSelector(state => state.lender.acceptedRequests);

    const [pendingReqs, setPendingReqs] = useState('pending');
    const [modalShow, setModalShow] = React.useState(false);
    const [borrower_id, setBorrower_id] = React.useState('');

    const modalHandler = (borrower) => {
        setBorrower_id(borrower);
        setModalShow(true);
    };

    const acceptRequestHandler = id => {
        const data = {
            "currency": "SAR",
            "callback_url": "https://example.com/orders",
            "source": {
                "type": "creditcard",
                "name": "Lender",
                "number": "4374530018379954",
                "cvc": 123,
                "month": 6,
                "year": 25
            }
        };

        dispatch(acceptRequest(data, id, user.id));
    };

    useEffect(() => {
        dispatch(allLenderPendingRequests());
        dispatch(lenderAcceptedRequests(user.id));
    }, []);

    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <RatingModal show={modalShow} onHide={() => setModalShow(false)} id={borrower_id} />
                <Col className='d-flex align-items-center justify-content-between mb-3'>
                    <h4 className='fw-bold'>{t('borrowing_text')}</h4>
                </Col>
                <Col className='my-2'>
                    <Button className='px-5 me-3 text-light btn custom-btn' onClick={() => setPendingReqs('pending')}>{t('pending_requests')}</Button>
                    <Button className='px-5 me-3 text-light btn custom-btn' onClick={() => setPendingReqs('accepted')}>{t('your_accepted')}</Button>
                </Col>
                <Col>
                    {pendingReqs === 'pending' && <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('amount_text')}</th>
                                <th>{t('status_text')}</th>
                                <th>{t('actions_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allRequests && allRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                    <td><p className='text-success fw-bold action' onClick={() => acceptRequestHandler(request.id)}>Accept</p></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}

                    {pendingReqs === 'accepted' && <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('amount_text')}</th>
                                <th>{t('status_text')}</th>
                                <th>{t('actions_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {acceptedRequests && acceptedRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                    <td>{request.status === 'COMPLETED' && <p className='me-2 text-success fw-bold action' onClick={() => modalHandler(request.borrowerID)}>{t('rate_text')}</p>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}
                </Col>
            </Row>
        </Zoom>
    )
}

export default LenderRequestsTable;
