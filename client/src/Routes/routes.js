import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from '../App';
// import AdminLogin from '../Pages/admin/login';
// import AdminSignup from '../Pages/admin/signup';
// import ServiceForm from '../Pages/service/ServiceForm';

function Routess() {
  return (
      <Routes>
        <Route path='/' element={<App />}/>
        {/* <Route path='/login' element={<AdminLogin />}/> */}
        {/* <Route path='/signup' element={<AdminSignup />}/> */}
        {/* <Route path='/serviceForm' element={<ServiceForm />}/> */}
    </Routes>
  )
}

export default Routess;