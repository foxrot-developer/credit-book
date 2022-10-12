import React from 'react';
import { useTranslation } from "react-i18next";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserFriends } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { IoMdCash } from 'react-icons/io';
import { AiFillDashboard } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import BorrowingRequestsTable from '../../components/admin/borrowing-requests/BorrowingRequestsTable';

const BorrowingRequests = () => {

    const { t, i18n } = useTranslation();

    const { collapseSidebar } = useProSidebar();

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100%', border: '10px' }}>
            <Sidebar collapsedWidth='70px' defaultCollapsed className='sidebar-container'>
                <Menu className='mt-5'>
                    <NavLink to='/dashboard/admin' className='menu-item-link'><MenuItem><AiFillDashboard className='menu-icon' /> Dashboard</MenuItem></NavLink>
                    <NavLink to='/dashboard/admin/users' className='menu-item-link'><MenuItem><FaUserFriends className='menu-icon' /> Users</MenuItem></NavLink>
                    <NavLink to='/dashboard/admin/lending-requests' className='menu-item-link'><MenuItem><RiMoneyDollarCircleFill className='menu-icon' /> Lending Requests</MenuItem></NavLink>
                    <NavLink to='/dashboard/admin/borrowing-requests' className='menu-item-link'><MenuItem><IoMdCash className='menu-icon' /> Borrowing Requests</MenuItem></NavLink>
                </Menu>
            </Sidebar>
            <main className='w-100 page-main'>
                <Container>
                    <Row>
                        <Col xs='12' lg='6' className='d-flex align-items-center py-2'>
                            <GiHamburgerMenu className='collapse-menu m-0 me-3' onClick={() => collapseSidebar()} />
                            <p className='m-0 text-muted'>/dashboard/borrowing-requests</p>
                        </Col>
                    </Row>
                    <BorrowingRequestsTable />
                </Container>
            </main>
        </div>
    )
}

export default BorrowingRequests;
