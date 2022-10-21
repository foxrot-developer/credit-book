import React, { useEffect } from 'react';
import { Table, Row, Col, Form, Button } from 'react-bootstrap';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import { getAllWallets } from '../../../store/StoreIndex';

const WalletsTable = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const allWallets = useSelector(state => state.admin.allWallets);

    useEffect(() => {
        dispatch(getAllWallets());
    }, []);

    return (
        <Zoom>
            <Row className='my-5 d-flex flex-column'>
                <Col>
                    <h4 className='fw-bold'>Wallets</h4>
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
                                <th>Id</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allWallets && allWallets.map((wallet, index) => (
                                <tr key={index}>
                                    <td>{wallet.id}</td>
                                    <td>{wallet.amount}</td>
                                    <td>{wallet.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Zoom>
    )
}

export default WalletsTable;
