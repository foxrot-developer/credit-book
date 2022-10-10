import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import '../assets/css/login.css';
import LoginForm from '../components/login/LoginForm';

const Login = () => {

    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
        document.dir = i18n.dir();
    };

    return (
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
                                    <h4 className='text-center fs-5 fw-bold mb-4'>{t('login')}</h4>
                                    <LoginForm />
                                    <p className='text-center mt-3 switch-forms'>{t('member')} <span className='switch-form' onClick={() => navigate('/register')}>{t('register')}</span></p>
                                </div>
                            </div>
                        </Col>
                    </Fade>
                </Row>
            </Container>
        </div>
    )
}

export default Login;
