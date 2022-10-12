import React from 'react';
import { Table, Row, Col, Form, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";

const BorrowingRequestsTable = () => {
    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <Col>
                    <h4 className='fw-bold'>BORROWING REQUESTS</h4>
                </Col>
                <Col xs='12' lg='5' className='mb-3'>
                    <Form className='d-flex'>
                        <Form.Control type="text" placeholder="Search User" className='me-2' />
                        <Button type="submit" className='custom-btn'>
                            Search
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Borrowing Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John</td>
                                <td>1234567890</td>
                                <td>john@gmail.com</td>
                                <td>$30</td>
                                <td>
                                    <div className='d-flex align-items-center justify-content-start'>
                                        <p className='me-2 text-success fw-bold action'>Approve</p>
                                        <p className='text-danger fw-bold action'>Reject</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Zoom>
    )
}

export default BorrowingRequestsTable;
