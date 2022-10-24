import React from 'react';
import { useTranslation } from "react-i18next";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdCash } from 'react-icons/io';
import { AiFillDashboard } from 'react-icons/ai';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import DashboardCards from '../../components/borrower/home/DashboardCards';
import { borrowerLogout } from '../../store/borrower/actions/actionCreators';

const BorrowerHome = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
        document.dir = i18n.dir();
    };

    const { collapseSidebar } = useProSidebar();

    const LogoutHandler = () => {
        dispatch(borrowerLogout(navigate));
    };

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100%', border: '10px' }}>
            <Sidebar collapsedWidth='70px' defaultCollapsed className='sidebar-container'>
                <Menu className='mt-5'>
                    <NavLink to='/dashboard/borrower' className='menu-item-link'><MenuItem><AiFillDashboard className='menu-icon' /> {t('dashboard_text')}</MenuItem></NavLink>
                    <NavLink to='/dashboard/borrower/borrowing-requests' className='menu-item-link'><MenuItem><IoMdCash className='menu-icon' /> {t('borrowing_text')}</MenuItem></NavLink>
                    <div className='menu-item-link' onClick={LogoutHandler}><MenuItem><RiLogoutBoxRFill className='menu-icon' />Logout</MenuItem></div>
                </Menu>
            </Sidebar>
            <main className='w-100 page-main'>
                <Container>
                    <Row>
                        <Col xs='12' lg='6' className='d-flex align-items-center py-2'>
                            <GiHamburgerMenu className='collapse-menu m-0 me-3' onClick={() => collapseSidebar()} />
                            <p className='m-0 text-muted'>/dashboard</p>
                        </Col>
                        <Col xs='12' lg='6' className='d-flex align-items-center justify-content-end py-2'>
                            <p className='switch-lang p-0' onClick={localStorage.getItem("lang") === 'en' ? () => changeLanguage('ar') : () => changeLanguage('en')}>{t('switch_lng')}</p>
                        </Col>
                    </Row>
                    <DashboardCards />
                </Container>
            </main>
        </div>
    )
}

export default BorrowerHome;
