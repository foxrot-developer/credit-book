import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/admin/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Otp from '../pages/Otp';
import Users from '../pages/admin/Users';
import LendingRequests from '../pages/admin/LendingRequests';
import BorrowingRequests from '../pages/admin/BorrowingRequests';

import BorrowerHome from '../pages/borrower/BorrowerHome';
import BorrowerRequest from '../pages/borrower/BorrowerRequest';

const NavigationRoutes = () => {

    return (
        <Routes>
            {/** Admin */}
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/dashboard/admin' element={<Home />}></Route>
            <Route exact path='/dashboard/admin/users' element={<Users />}></Route>
            <Route exact path='/dashboard/admin/lending-requests' element={<LendingRequests />}></Route>
            <Route exact path='/dashboard/admin/borrowing-requests' element={<BorrowingRequests />}></Route>
            <Route exact path='/register' element={<Registration />}></Route>
            <Route exact path='/otp' element={<Otp />}></Route>

            {/** Borrower */}
            <Route exact path='/dashboard/borrower' element={<BorrowerHome />}></Route>
            <Route exact path='/dashboard/borrower/borrowing-requests' element={<BorrowerRequest />}></Route>

            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    );
}

export default NavigationRoutes;
