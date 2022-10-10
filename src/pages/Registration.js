import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import RegistrationForm from '../components/registration/RegistrationForm';

const Registration = () => {

    const navigate = useNavigate();

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
                            <Col>
                                <div className='page-section'>
                                    <div className='logo-section'>
                                        <h3 className='text-center fw-bold fs-4 text-light my-3'>{t('credit_book')}</h3>
                                    </div>
                                    <div className='form-area'>
                                        <div className='text-end mb-5'>
                                            <p className='switch-lang' onClick={localStorage.getItem("lang") === 'en' ? () => changeLanguage('ar') : () => changeLanguage('en')}>{t('switch_lng')}</p>
                                        </div>
                                        <h4 className='text-center fs-5 fw-bold mb-4'>{t('registration')}</h4>
                                        <RegistrationForm />
                                        <p className='text-center mt-3 switch-forms'>{t('already_account')} <span className='switch-form' onClick={() => navigate('/')}>{t('register_login')}</span></p>
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

export default Registration;
