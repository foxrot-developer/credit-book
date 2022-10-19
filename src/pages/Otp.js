import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';

import OtpForm from '../components/otp/OtpForm';

const Otp = () => {

    const { state } = useLocation();

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
        document.dir = i18n.dir();
    };

    return (
        <React.Fragment>
            <div className='body-container'>
                <Container>
                    <Row>
                        <Fade direction='left' className='d-flex align-items-center justify-content-center'>
                            <Col xs='12' lg='7'>
                                <div className='page-section'>
                                    <div className='logo-section'>
                                        <h3 className='text-center fw-bold fs-4 text-light my-3'>{t('credit_book')}</h3>
                                    </div>
                                    <div className='form-area'>
                                        <div className='text-end mb-5'>
                                            <p className='switch-lang' onClick={localStorage.getItem("lang") === 'en' ? () => changeLanguage('ar') : () => changeLanguage('en')}>{t('switch_lng')}</p>
                                        </div>
                                        <h4 className='text-center fs-5 fw-bold mb-4'>OTP</h4>
                                        <OtpForm email={state.email} />
                                    </div>
                                </div>
                            </Col>
                        </Fade>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Otp;
