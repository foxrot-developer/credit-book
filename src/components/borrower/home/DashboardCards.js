import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { FaUserFriends } from 'react-icons/fa';
import { IoMdCash } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { BsFillWalletFill } from 'react-icons/bs';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';

import { allBorrowerRequests } from '../../../store/StoreIndex';
import Axios from '../../../axios/Axios';
import AddAmountModal from '../AddAmountModal';

const DashboardCards = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const user = useSelector(state => state.user.user);
    const allRequests = useSelector(state => state.borrower.allRequests);

    const [totalRating, setTotalRating] = useState(0);
    const [wallet, setWallet] = useState(0);
    const [modalShow, setModalShow] = useState(false);

    const pendingRequests = allRequests && allRequests.filter(request => request.status === 'PENDING');

    useEffect(() => {
        dispatch(allBorrowerRequests(user.id));
        Axios.get(`loan-api/rating/${user.id}`)
            .then(response => {
                setTotalRating(response.data.data.rating);
            })
            .catch(error => {
                console.log({ error });
            });

        Axios.get(`loan-api/wallet/${user.id}`)
            .then(response => {
                setWallet(response.data.data.amount);
            })
            .catch(error => {
                console.log({ error });
            });
    }, [user.id]);

    return (
        <Row>
            <Row>
                <Col>
                    <Button type='submit' className='px-5 text-light mt-3 btn custom-btn' onClick={() => setModalShow(true)}>
                        {t('add_amount')}
                    </Button>
                    <AddAmountModal show={modalShow} onHide={() => setModalShow(false)} />
                </Col>
            </Row>
            <Col xs='12' lg='4'>
                <Zoom>
                    <div className='card-main'>
                        <Row className='my-2'>
                            <Col className='d-flex align-items-center justify-content-start'>
                                <IoMdCash className='card-icon' /> <p className='card-text'>{allRequests ? allRequests.length : 0}</p>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-end'>
                                <p className='card-total'>{t('total_borrows')}</p>
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col className='d-flex align-items-center justify-content-start'>
                                <IoMdCash className='card-icon' /> <p className='card-text'>{pendingRequests ? pendingRequests.length : 0}</p>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-end'>
                                <p className='card-total'>{t('pending_borrows')}</p>
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col className='d-flex align-items-center justify-content-start'>
                                <AiFillStar className='card-icon' /> <p className='card-text'>{totalRating ? totalRating : 0}</p>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-end'>
                                <p className='card-total'>{t('total_rating')}</p>
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            <Col className='d-flex align-items-center justify-content-start'>
                                <BsFillWalletFill className='card-icon' /> <p className='card-text'>{wallet ? `$${wallet}` : `$0`}</p>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-end'>
                                <p className='card-total'>{t('wallet_amount')}</p>
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
                                <p className='text-light'>{t('recent_pending')}</p>
                            </Col>
                        </Row>
                        <Row className='my-2'>
                            {pendingRequests && <React.Fragment>
                                <Col className='d-flex align-items-center justify-content-start'>
                                    <FaUserFriends className='card-icon' /> <p className='card-text'>{pendingRequests.length && `id: ${pendingRequests[pendingRequests.length - 1].id}`}</p>
                                </Col>
                                <Col className='d-flex align-items-center justify-content-end'>
                                    <p className='card-total'>{pendingRequests.length && `$${pendingRequests[pendingRequests.length - 1].amount}`}</p>
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
