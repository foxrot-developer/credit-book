import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';

import { allLenderPendingRequests, lenderAcceptedRequests } from '../../../store/StoreIndex';

function LenderRequestsTable() {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const user = useSelector(state => state.user.user);
    const allRequests = useSelector(state => state.lender.allRequests);
    const acceptedRequests = useSelector(state => state.lender.acceptedRequests);

    const [pendingReqs, setPendingReqs] = useState('pending');

    useEffect(() => {
        dispatch(allLenderPendingRequests());
        dispatch(lenderAcceptedRequests(user.id));
    }, []);

    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <Col className='d-flex align-items-center justify-content-between mb-3'>
                    <h4 className='fw-bold'>{t('borrowing_text')}</h4>
                </Col>
                <Col className='my-2'>
                    <Button className='px-5 me-3 text-light btn custom-btn' onClick={() => setPendingReqs('pending')}>Pending Requests</Button>
                    <Button className='px-5 text-light btn custom-btn' onClick={() => setPendingReqs('accepted')}>Your Accepted Requests</Button>
                </Col>
                <Col>
                    {pendingReqs === 'pending' && <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Borrower Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allRequests && allRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                    <td>{request.borrowerID}</td>
                                    <td><p className='text-success fw-bold action'>Accept</p></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}

                    {pendingReqs === 'accepted' && <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Borrower Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {acceptedRequests && acceptedRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                    <td>{request.borrowerID}</td>
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
