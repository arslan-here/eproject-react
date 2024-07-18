import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AuthLayout from './layout/AuthLayout'
import GuestLayout from './layout/GuestLayout'
import User from './pages/User';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = import.meta.env.VITE_API_URL
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='' element={
        <AuthLayout><Home /></AuthLayout>
        } />
        <Route path="login" element={
         <GuestLayout><Login /></GuestLayout>
         } />
        <Route path="register" element={ 
         <GuestLayout><Register /></GuestLayout>
        } />
          <Route path="user" element={ 
         <AuthLayout><User /></AuthLayout>
        } />
        </>
    )
  )
  return (
    <>
    <ToastContainer />
       <RouterProvider router={router}/>
    </>
  )
}

export default App
