import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <>
            <div className="container mx-auto mt-10">
                <h1 className="text-3xl font-bold text-center mb-10">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link to="/admin/reservations" className="p-6 bg-red-100 rounded-lg shadow-lg text-center">
                        <h2 className="text-xl font-semibold mb-2">Manage Reservations</h2>
                        <p>View, edit, or delete reservations</p>
                    </Link>
                    <Link to="/admin/menu" className="p-6 bg-red-100 rounded-lg shadow-lg text-center">
                        <h2 className="text-xl font-semibold mb-2">Manage Menu</h2>
                        <p>Add, edit, or delete menu items</p>
                    </Link>
                    <Link to="/admin/users" className="p-6 bg-red-100 rounded-lg shadow-lg text-center">
                        <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
                        <p>View, edit, or delete user accounts</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Admin;