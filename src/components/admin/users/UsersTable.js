import React from 'react';
import { Table, Row, Col, Form, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";

import '../../../assets/css/users-table.css';

const UsersTable = () => {
    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <Col>
                    <h4 className='fw-bold'>USERS</h4>
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
                                <th>Student Id</th>
                                <th>National Id</th>
                                <th>Current Level</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John</td>
                                <td>123123</td>
                                <td>STD123</td>
                                <td>1234567890</td>
                                <td>Level 1</td>
                                <td>john@gmail.com</td>
                                <td>Lender</td>
                                <td>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <p className='me-2 text-success fw-bold action'>Block</p>
                                        <p className='text-danger fw-bold action'>Unblock</p>
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

export default UsersTable;
