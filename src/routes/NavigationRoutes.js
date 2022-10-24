import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/admin/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Otp from '../pages/Otp';
import Users from '../pages/admin/Users';
import LendingRequests from '../pages/admin/LendingRequests';
import BorrowingRequests from '../pages/admin/BorrowingRequests';
import Wallet from '../pages/admin/Wallet';

import BorrowerHome from '../pages/borrower/BorrowerHome';
import BorrowerRequest from '../pages/borrower/BorrowerRequest';

import LenderHome from '../pages/lender/LenderHome';
import LenderRequest from '../pages/lender/LenderRequest';

const NavigationRoutes = () => {

    return (
        <Routes>
            {/** Admin */}
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/dashboard/admin' element={<Home />}></Route>
            <Route exact path='/dashboard/admin/users' element={<Users />}></Route>
            <Route exact path='/dashboard/admin/lending-requests' element={<LendingRequests />}></Route>
            <Route exact path='/dashboard/admin/borrowing-requests' element={<BorrowingRequests />}></Route>
            <Route exact path='/dashboard/admin/wallets' element={<Wallet />}></Route>
            <Route exact path='/register' element={<Registration />}></Route>
            <Route exact path='/otp' element={<Otp />}></Route>

            {/** Borrower */}
            <Route exact path='/dashboard/borrower' element={<BorrowerHome />}></Route>
            <Route exact path='/dashboard/borrower/borrowing-requests' element={<BorrowerRequest />}></Route>
            
            {/** Lender */}
            <Route exact path='/dashboard/lender' element={<LenderHome />}></Route>
            <Route exact path='/dashboard/borrower/lending-requests' element={<LenderRequest />}></Route>

            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    );
}

export default NavigationRoutes;
