// src/components/ManageReservations.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageReservations = () => {
    const [reservations, setReservations] = useState([{
        _id: "6650c67d809059f6db71706d",
        username: "maheshzalte",
        phone: "9876543200",
        email: "mahesh@mahesh.com",
        isAdmin: false,
        "__v": 0
    },
    {
        _id: "6650c6d3809059f6db717071",
        username: "maheshzalte1",
        phone: "9876543201",
        email: "mahesh1@mahesh.com",
        isAdmin: false,
        "__v": 0
    }]);

    useEffect(() => {
        axios.get('/api/reservations')
            .then(response => setReservations(response.data))
            .catch(error => console.error('Error fetching reservations:', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/api/reservations/${id}`)
            .then(() => setReservations(reservations.filter(reservation => reservation.id !== id)))
            .catch(error => console.error('Error deleting reservation:', error));
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center mb-10">Manage Reservations</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Name</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Time</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(reservation => (
                        <tr key={reservation._id}>
                            <td className="py-2">{reservation.username}</td>
                            <td className="py-2">{reservation.phone}</td>
                            <td className="py-2">{reservation.email}</td>
                            <td className="py-2">
                                <button onClick={() => handleDelete(reservation.id)} className="text-red-500">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageReservations;
