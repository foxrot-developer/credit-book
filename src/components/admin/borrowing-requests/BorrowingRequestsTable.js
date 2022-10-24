import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import { getAllRequests, updateRequestStatus, getPendingRequests, getInitiatedRequests, createInvoice } from '../../../store/StoreIndex';

const BorrowingRequestsTable = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [allReqs, setAllReqs] = useState('all');

    const allRequests = useSelector(state => state.admin.allRequests);
    const allPendingRequests = useSelector(state => state.admin.allPendingRequests);
    const allInitiatedRequests = useSelector(state => state.admin.allInitiatedRequests);

    const updateRequestHandler = (status, id) => {
        const data = {
            status
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
    }, []);

    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <Col>
                    <h4 className='fw-bold'>{t('borrowing_text')}</h4>
                </Col>
                {/**<Col xs='12' lg='5' className='mb-3'>
                    <Form className='d-flex'>
                        <Form.Control type="text" placeholder={t('search_user')} className='me-2' />
                        <Button type="submit" className='custom-btn'>
                            {t('search_text')}
                        </Button>
                    </Form>
    </Col>**/}
                <Col className='my-2'>
                    <Button className='px-5 me-3 text-light btn custom-btn' onClick={() => setAllReqs('all')}>All Requests</Button>
                    <Button className='px-5 me-3 text-light btn custom-btn' onClick={() => setAllReqs('pending')}>Pending Requests</Button>
                    <Button className='px-5 text-light btn custom-btn' onClick={() => setAllReqs('initiated')}>Initiated Requests</Button>
                </Col>
                <Col>
                    {allReqs === 'all' && <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Borrower Id</th>
                                <th>{t('borrowing_amount_text')}</th>
                                <th>Status</th>
                                <th>{t('actions_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allRequests && allRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{request.borrowerID}</td>
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
                                <th>Borrower Id</th>
                                <th>{t('borrowing_amount_text')}</th>
                                <th>Status</th>
                                <th>{t('actions_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allPendingRequests && allPendingRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{request.borrowerID}</td>
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
                                <th>Borrower Id</th>
                                <th>Lender Id</th>
                                <th>{t('borrowing_amount_text')}</th>
                                <th>Status</th>
                                <th>{t('actions_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allInitiatedRequests && allInitiatedRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{request.borrowerID}</td>
                                    <td>{request.lenderID}</td>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                    <td>
                                        <p className='me-2 text-success fw-bold action' onClick={() => invoiceHandler(request.amount, request.id)}>Create Invoice</p>
                                    </td>
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
