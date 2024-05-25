import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AdminLayout() {
    return (
        <>
            <nav className="bg-red-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                    <div className="flex space-x-4">
                        <Link to="/admin/dashboard" className="hover:underline">Dashboard</Link>
                        <Link to="/admin/manage-orders" className="hover:underline">Manage Orders</Link>
                        <Link to="/admin/manage-users" className="hover:underline">Manage Users</Link>
                        <Link to="/admin/manage-menu" className="hover:underline">Manage Menu</Link>
                        <Link to="/admin/settings" className="hover:underline">Settings</Link>
                    </div>
                </div>
            </nav>

            {/* <Outlet /> */}
        </>
    )
}

export default AdminLayout