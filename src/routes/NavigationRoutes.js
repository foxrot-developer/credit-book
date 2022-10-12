import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/admin/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Otp from '../pages/Otp';
import Users from '../pages/admin/Users';
import LendingRequests from '../pages/admin/LendingRequests';
import BorrowingRequests from '../pages/admin/BorrowingRequests';

const NavigationRoutes = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/dashboard/admin' element={<Home />}></Route>
            <Route exact path='/dashboard/admin/users' element={<Users />}></Route>
            <Route exact path='/dashboard/admin/lending-requests' element={<LendingRequests />}></Route>
            <Route exact path='/dashboard/admin/borrowing-requests' element={<BorrowingRequests />}></Route>
            <Route exact path='/register' element={<Registration />}></Route>
            <Route exact path='/otp' element={<Otp />}></Route>
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    );
}

export default NavigationRoutes;
