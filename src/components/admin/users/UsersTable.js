import React from 'react';
import { Table, Row, Col, Form, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

import '../../../assets/css/users-table.css';

const UsersTable = () => {

    const { t } = useTranslation();

    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <Col>
                    <h4 className='fw-bold'>{t('users_text')}</h4>
                </Col>
                <Col xs='12' lg='5' className='mb-3'>
                    <Form className='d-flex'>
                        <Form.Control type="text" placeholder={t('search_user')} className='me-2' />
                        <Button type="submit" className='custom-btn'>
                            {t('search_text')}
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('full_name_text')}</th>
                                <th>{t('phone_text')}</th>
                                <th>{t('std_text')}</th>
                                <th>{t('national_text')}</th>
                                <th>{t('current_text')}</th>
                                <th>{t('email')}</th>
                                <th>{t('type_text')}</th>
                                <th>{t('actions_text')}</th>
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
                                    <div className='d-flex align-items-center justify-content-start'>
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
