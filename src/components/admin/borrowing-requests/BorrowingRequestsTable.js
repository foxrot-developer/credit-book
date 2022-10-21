import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import { getAllRequests, updateRequestStatus, getPendingRequests } from '../../../store/StoreIndex';

const BorrowingRequestsTable = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [allReqs, setAllReqs] = useState(true);

    const allRequests = useSelector(state => state.admin.allRequests);
    const allPendingRequests = useSelector(state => state.admin.allPendingRequests);

    const updateRequestHandler = (status, id) => {
        const data = {
            status
        }

        dispatch(updateRequestStatus(data, id));
    };

    useEffect(() => {
        dispatch(getAllRequests());
        dispatch(getPendingRequests());
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
                    <Button className='px-5 me-3 text-light btn custom-btn' onClick={() => setAllReqs(true)}>All Requests</Button>
                    <Button className='px-5 text-light btn custom-btn' onClick={() => setAllReqs(false)}>Pending Requests</Button>
                </Col>
                <Col>
                    {allReqs && <Table className='table-main' striped bordered hover responsive>
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
                    {!allReqs && <Table className='table-main' striped bordered hover responsive>
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

                </Col>
            </Row>
        </Zoom>
    )
}

export default BorrowingRequestsTable;
