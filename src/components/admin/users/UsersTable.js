import React, { useEffect } from 'react';
import { Table, Row, Col, Form, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import '../../../assets/css/users-table.css';
import { getAllUsers } from '../../../store/StoreIndex';

const UsersTable = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const allUsers = useSelector(state => state.user.allUsers);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <Col>
                    <h4 className='fw-bold'>{t('users_text')}</h4>
                </Col>
                {/**<Col xs='12' lg='5' className='mb-3'>
                    <Form className='d-flex'>
                        <Form.Control type="text" placeholder={t('search_user')} className='me-2' />
                        <Button type="submit" className='custom-btn'>
                            {t('search_text')}
                        </Button>
                    </Form>
    </Col>**/}
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
                            {allUsers && allUsers.map((user, index) => (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.studentID}</td>
                                    <td>1234567890</td>
                                    <td>Level 1</td>
                                    <td>{user.email}</td>
                                    <td>{user.type}</td>
                                    <td>
                                        <div className='d-flex align-items-center justify-content-start'>
                                            <p className='me-2 text-warning fw-bold action'>Update</p>
                                            <p className='text-danger fw-bold action'>Delete</p>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Zoom>
    )
}

export default UsersTable;
