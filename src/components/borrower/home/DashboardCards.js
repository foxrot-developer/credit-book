import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaUserFriends } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { IoMdCash } from 'react-icons/io';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const DashboardCards = () => {
    const { t } = useTranslation();

    return (
        <Row>
            <Col xs='12' lg='4'>
                <Zoom>
                    <div className='card-main'>
                        <Row className='my-2'>
                            <Col className='d-flex align-items-center justify-content-start'>
                                <IoMdCash className='card-icon' /> <p className='card-text'>120</p>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-end'>
                                <p className='card-total'>Total Borrows</p>
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col className='d-flex align-items-center justify-content-start'>
                                <IoMdCash className='card-icon' /> <p className='card-text'>100</p>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-end'>
                                <p className='card-total'>Pending Borrows</p>
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
                                <p className='text-light'>Your Pending Borrows</p>
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
        </Row>
    )
}

export default DashboardCards;
