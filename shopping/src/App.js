import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/signIn/signIn';
import LogIn from './components/logIn/login';
import Navbar from './components/Navbar/navbar';
import Home from './components/HomePage/homepage';
import Pay from './components/pay/pay';
import CardModal from './components/cardModel/cardModel';
import CustomItemContext from './itemContext';



function App() {
  return (
    <>
    <BrowserRouter>
    <CustomItemContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/CardModal" element={< CardModal/>} />
          <Route path="/Pay" element={<Pay />} />
        </Routes>
        </CustomItemContext>
      </BrowserRouter>  
    </>
  );
}

export default App;