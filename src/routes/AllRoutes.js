import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Home/HomePage'
import { CartPage, DashboardPage, Login, OrderPage, ProductDetail, Register } from '../pages'
import { ProtectedRoute } from './ProtectedRoutes'
import { PageNotFound } from '../pages/PageNotFound'
import { ProductsList } from '../pages/Products/ProducstList'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="products/:id" element={<ProductDetail />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
            <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
