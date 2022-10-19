import React from 'react';
import { Table, Row, Col, Form, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const BorrowerRequestsTable = () => {
    const { t } = useTranslation();

    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <Col>
                    <h4 className='fw-bold'>{t('borrowing_text')}</h4>
                </Col>
                <Col>
                    <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('full_name_text')}</th>
                                <th>{t('phone_text')}</th>
                                <th>{t('email')}</th>
                                <th>{t('borrowing_amount_text')}</th>
                                <th>Status</th>
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
                                        <p className='me-2 text-success fw-bold'>Approve</p>
                                        <p className='text-danger fw-bold'>Reject</p>
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

export default BorrowerRequestsTable;
