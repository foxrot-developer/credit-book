import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import '../assets/css/login.css';
import LoginForm from '../components/login/LoginForm';
import LoginImg from '../assets/images/loan-approved-application-form-concept.jpg';

const Login = () => {

    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <div className='body-container'>
            <Container>
                <Row>
                    <Col xs='12' lg='5'>
                        <Fade direction='left'>
                            <div className='form-area'>
                                <div>
                                    <select className="form-select" defaultValue={localStorage.getItem("lang") || "en"} aria-label="Default select example" onChange={(e) => changeLanguage(e.target.value)}>
                                        <option value="en">English</option>
                                        <option value="ar">عربي</option>
                                    </select>
                                </div>
                                <h3 className='text-center fw-bold text-light my-3'>{t('credit_book')}</h3>
                                <h4 className='text-center fw-bold text-light'>{t('login')}</h4>
                                <LoginForm />
                                <p className='text-center mt-3 text-light'>{t('member')} <span className='switch-form' onClick={() => navigate('/register')}>{t('register')}</span></p>
                            </div>
                        </Fade>
                    </Col>
                    <Col xs='12' lg='7' className='form-img'>
                        <Fade direction='right'>
                            <Image fluid src={LoginImg} alt="Login" loading='lazy' className='form-img' />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;
