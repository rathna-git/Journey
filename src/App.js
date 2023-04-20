import React from "react";
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage/index.jsx';
import LoginPage from './pages/loginPage/index.jsx';
import ProfilePage from './pages/profilePage/index.jsx';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';





function App(){

        return(
        <div className ='app'>              
              <BrowserRouter>         
                <Routes>
                        <Route path='/' element={<LoginPage/>} />
                        <Route path='/home' element={<HomePage/>} />
                        <Route path='/profile/:userId' element={<ProfilePage/>} />
                </Routes>    
              </BrowserRouter>  
        </div>
        )
    
}

export default App;