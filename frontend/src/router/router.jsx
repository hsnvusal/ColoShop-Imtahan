import React from 'react'
import { Routes,Route } from 'react-router'
import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home'
import Admin from '../components/Admin/Admin'
import AddProduct from '../components/Admin/AddProduct'

const router = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/admin/add' element={<AddProduct/>}></Route>
        </Route>
    </Routes>
    
  )
}

export default router