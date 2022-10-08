import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

import OtpForm from '../components/otp/OtpForm';

const Otp = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
        document.dir = i18n.dir();
    };

    return (
        <div className='body-container'>
            <Container>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col xs='12' lg='6'>
                        <Fade direction='left'>
                            <div className='form-area'>
                                <div>
                                    <select className="form-select" defaultValue={localStorage.getItem("lang") || "en"} aria-label="Default select example" onChange={(e) => changeLanguage(e.target.value)}>
                                        <option value="en">English</option>
                                        <option value="ar">عربي</option>
                                    </select>
                                </div>
                                <h3 className='text-center fw-bold text-light my-3'>{t('credit_book')}</h3>
                                <h4 className='text-center fw-bold text-light'>OTP</h4>
                                <OtpForm />
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Otp;
