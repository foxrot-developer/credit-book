import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Otp from '../pages/Otp';

const NavigationRoutes = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Login />}></Route>
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
