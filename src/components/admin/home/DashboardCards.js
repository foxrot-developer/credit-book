import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaUserFriends } from 'react-icons/fa';
import { IoMdCash } from 'react-icons/io';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import '../../../assets/css/dashboard-cards.css';
import { getAllUsers, getAllRequests, getPendingRequests } from '../../../store/StoreIndex';

const DashboardCards = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const allUsers = useSelector(state => state.admin.allUsers);
    const allRequests = useSelector(state => state.admin.allRequests);
    const allPendingRequests = useSelector(state => state.admin.allPendingRequests);

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllRequests());
        dispatch(getPendingRequests());
    }, []);

    return (
        <Row>
            <Col xs='12' lg='4'>
                <Zoom>
                    <div className='card-main'>
                        <Row className='my-2'>
                            <Col className='d-flex align-items-center justify-content-start'>
                                <FaUserFriends className='card-icon' /> <p className='card-text'>{allUsers ? allUsers.length : 0}</p>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-end'>
                                <p className='card-total'>{t('total_users')}</p>
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col className='d-flex align-items-center justify-content-start'>
                                <IoMdCash className='card-icon' /> <p className='card-text'>{allRequests ? allRequests.length : 0}</p>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-end'>
                                <p className='card-total'>{t('borrowing_text')}</p>
                            </Col>
                        </Row>
                    </div>
                </Zoom>
            </Col>
            <Col xs='12' lg='4'>
                <Zoom>
                    <div className='card-main lending-requests'>
                        <Row className='my-2'>
                            <Col className='text-start'>
                                <p className='text-light'>{t('recent_lending')}</p>
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col className='d-flex align-items-center justify-content-start'>
                                <FaUserFriends className='card-icon' /> <p className='card-text'>John</p>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-end'>
                                <p className='card-total'>$20</p>
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col className='d-flex align-items-center justify-content-start'>
                                <FaUserFriends className='card-icon' /> <p className='card-text'>John</p>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-end'>
                                <p className='card-total'>$20</p>
                            </Col>
                        </Row>
                    </div>
                </Zoom>
            </Col>
            <Col xs='12' lg='4'>
                <Zoom>
                    <div className='card-main borrowing-requests'>
                        <Row className='my-2'>
                            <Col className='text-start'>
                                <p className='text-light'>{t('recent_borrowing')}</p>
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            {allPendingRequests.length && <React.Fragment>
                                <Col className='d-flex align-items-center justify-content-start'>
                                    <FaUserFriends className='card-icon' /> <p className='card-text'>{`Borrower Id: ${allPendingRequests[allPendingRequests.length - 1].borrowerID}`}</p>
                                </Col>
                                <Col className='d-flex align-items-center justify-content-end'>
                                    <p className='card-total'>{`$${allPendingRequests[allPendingRequests.length - 1].amount}`}</p>
                                </Col>
                            </React.Fragment>}
                        </Row>
                    </div>
                </Zoom>
            </Col>
        </Row>
    )
}

export default DashboardCards;
