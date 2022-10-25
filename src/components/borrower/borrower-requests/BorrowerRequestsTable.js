import React, { useEffect } from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';

import NewRequestModal from './NewRequestModal';
import { allBorrowerRequests, returnAmount } from '../../../store/StoreIndex';

const BorrowerRequestsTable = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const user = useSelector(state => state.user.user);
    const allRequests = useSelector(state => state.borrower.allRequests);

    const [modalShow, setModalShow] = React.useState(false);

    const returnAmountHandler = id => {
        dispatch(returnAmount(id, user.id));
    }

    useEffect(() => {
        dispatch(allBorrowerRequests(user.id));
    }, []);

    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <Col className='d-flex align-items-center justify-content-between mb-3'>
                    <h4 className='fw-bold'>{t('borrowing_text')}</h4>
                    <Button className='px-5 text-light btn custom-btn' onClick={() => setModalShow(true)}>
                        {t('new_request')}
                    </Button>
                    <NewRequestModal show={modalShow} onHide={() => setModalShow(false)} />
                </Col>
                <Col>
                    <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>{t('amount_text')}</th>
                                <th>{t('status_text')}</th>
                                <th>{t('actions_text')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allRequests && allRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                    <td>{request.status === 'BORROWED' && <p className='me-2 text-success fw-bold action' onClick={() => returnAmountHandler(request.id)}>Return</p>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Zoom>
    )
}

export default BorrowerRequestsTable;
