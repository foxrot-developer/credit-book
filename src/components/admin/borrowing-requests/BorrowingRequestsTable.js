import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import { getAllRequests, updateRequestStatus, getPendingRequests, getInitiatedRequests, createInvoice, getBorrowedRequests, getReturnRequests, getCompletedRequests } from '../../../store/StoreIndex';

const BorrowingRequestsTable = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [allReqs, setAllReqs] = useState('all');

    const allRequests = useSelector(state => state.admin.allRequests);
    const allPendingRequests = useSelector(state => state.admin.allPendingRequests);
    const allInitiatedRequests = useSelector(state => state.admin.allInitiatedRequests);
    const allBorrowedRequests = useSelector(state => state.admin.allBorrowedRequests);
    const allReturnRequests = useSelector(state => state.admin.allReturnRequests);
    const allCompletedRequests = useSelector(state => state.admin.allCompletedRequests);

    const updateRequestHandler = (status, id) => {
        const data = {
            status
        }

        dispatch(updateRequestStatus(data, id));
    };

    const completeHandler = id => {
        const data = {
            status: 'COMPLETED'
        }
        dispatch(updateRequestStatus(data, id));
    };

    const invoiceHandler = (amount, id) => {
        const data = {
            amount: +amount,
            currency: "SAR",
            description: "kindle paperwhite"
        };

        dispatch(createInvoice(data, id));
    };

    useEffect(() => {
        dispatch(getAllRequests());
        dispatch(getPendingRequests());
        dispatch(getInitiatedRequests());
        dispatch(getBorrowedRequests());
        dispatch(getReturnRequests());
        dispatch(getCompletedRequests());
    }, []);

    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <Col>
                    <h4 className='fw-bold'>{t('borrowing_text')}</h4>
                </Col>
                <Col className='my-2'>
                    <Button className='px-5 me-1 text-light btn custom-btn' onClick={() => setAllReqs('all')}>{t('all_text')}</Button>
                    <Button className='px-5 me-1 text-light btn custom-btn' onClick={() => setAllReqs('pending')}>{t('pending_text')}</Button>
                    <Button className='px-5 me-1 text-light btn custom-btn' onClick={() => setAllReqs('initiated')}>{t('initiated_text')}</Button>
                    <Button className='px-5 me-1 text-light btn custom-btn' onClick={() => setAllReqs('borrowed')}>{t('borrowed_text')}</Button>
                    <Button className='px-5 me-1 text-light btn custom-btn' onClick={() => setAllReqs('returned')}>{t('return_text')}</Button>
                    <Button className='px-5 me-1 text-light btn custom-btn' onClick={() => setAllReqs('completed')}>{t('completed_text')}</Button>
                </Col>
                <Col>
                    {allReqs === 'all' && <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('borrowing_amount_text')}</th>
                                <th>{t('status_text')}</th>
                                <th>{t('actions_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allRequests && allRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                    <td>
                                        {request.status === "PENDING" && <React.Fragment>
                                            <div className='d-flex align-items-center justify-content-start'>
                                                <p className='me-2 text-success fw-bold action' onClick={() => updateRequestHandler("APPROVED", request.id)}>Approve</p>
                                                <p className='text-danger fw-bold action' onClick={() => updateRequestHandler("REJECTED", request.id)}>Reject</p>
                                            </div>
                                        </React.Fragment>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}

                    {allReqs === 'pending' && <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('borrowing_amount_text')}</th>
                                <th>{t('status_text')}</th>
                                <th>{t('actions_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allPendingRequests && allPendingRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                    <td>
                                        {request.status === "PENDING" && <React.Fragment>
                                            <div className='d-flex align-items-center justify-content-start'>
                                                <p className='me-2 text-success fw-bold action' onClick={() => updateRequestHandler("APPROVED", request.id)}>Approve</p>
                                                <p className='text-danger fw-bold action' onClick={() => updateRequestHandler("REJECTED", request.id)}>Reject</p>
                                            </div>
                                        </React.Fragment>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}

                    {allReqs === 'initiated' && <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('borrowing_amount_text')}</th>
                                <th>{t('status_text')}</th>
                                <th>{t('actions_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allInitiatedRequests && allInitiatedRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                    <td>
                                        <p className='me-2 text-success fw-bold action' onClick={() => invoiceHandler(request.amount, request.id)}>Create Invoice</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}

                    {allReqs === 'borrowed' && <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('borrowing_amount_text')}</th>
                                <th>{t('status_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allBorrowedRequests && allBorrowedRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}

                    {allReqs === 'returned' && <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('borrowing_amount_text')}</th>
                                <th>{t('status_text')}</th>
                                <th>{t('actions_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allReturnRequests && allReturnRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                    <td>
                                        <p className='me-2 text-success fw-bold action' onClick={() => completeHandler(request.id)}>Complete</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}

                    {allReqs === 'completed' && <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('borrowing_amount_text')}</th>
                                <th>{t('status_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCompletedRequests && allCompletedRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}
                </Col>
            </Row>
        </Zoom>
    )
}

export default BorrowingRequestsTable;
