import React, { useEffect } from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';

import NewRequestModal from './NewRequestModal';
import { allBorrowerRequests } from '../../../store/StoreIndex';

const BorrowerRequestsTable = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const user = useSelector(state => state.user.user);
    const allRequests = useSelector(state => state.borrower.allRequests);

    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        dispatch(allBorrowerRequests(user.id));
    }, []);

    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <Col className='d-flex align-items-center justify-content-between mb-3'>
                    <h4 className='fw-bold'>{t('borrowing_text')}</h4>
                    <Button className='px-5 text-light btn custom-btn' onClick={() => setModalShow(true)}>
                        ADD NEW REQUEST
                    </Button>
                    <NewRequestModal show={modalShow} onHide={() => setModalShow(false)} />
                </Col>
                <Col>
                    <Table className='table-main' striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Lender Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allRequests && allRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{`$${request.amount}`}</td>
                                    <td>{request.status}</td>
                                    <td>{request.lenderID}</td>
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
