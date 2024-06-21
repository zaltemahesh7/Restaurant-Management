import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Animation from "./components/Animation.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import Registration from "./pages/Registration.jsx";
// import Admin from "./pages/Admin.jsx";
import AdminLayout from './components/layouts/Admin-Layout.jsx'
import PaymentConfirmation from "./pages/PaymentConfirmation.jsx";
// import ManageReservations from "./pages/ManageReservations.jsx";
import AdminUsers from "./pages/AdminUsers.jsx";
import UserProfile from "./components/Profile/UserProfile.jsx";
const Home = React.lazy(() => import("./pages/Home"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const Orderonline = React.lazy(() => import("./pages/orderonline"));
const Contact = React.lazy(() => import("./pages/Contact"), 120);
const Reservation = React.lazy(() => import("./pages/Reservation"));
const Aboutus = React.lazy(() => import("./pages/Aboutus"));
const Menu = React.lazy(() => import("./pages/Menu"));
const ProjectRoutes = () => {

    const user = {
        image: 'https://example.com/path/to/profile-picture.jpg',
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'A passionate developer who loves to build amazing web applications.',
    };

    let ck = []
    return (
        <React.Suspense fallback={<Animation />}>
            <Router>
                <Navbar />
                <Routes>
                    {/* <Route path="/*" element={<Navbar />} /> */}
                    <Route path="login" element={<Login />} />
                    <Route index element={<Home />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="register" element={<Registration />} />
                    <Route path="menu" element={<Menu setC={ck} />} />
                    <Route path="aboutus" element={<Aboutus />} />
                    <Route path="reservation" element={<Reservation />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="orderonline" element={<Orderonline />} />
                    <Route path="checkout" element={<Checkout cka={ck} />} />
                    <Route path="confirmation" element={<PaymentConfirmation />} />
                    <Route path="profile" element={<UserProfile user={user} />} />
                    <Route path="*" element={<NotFound />} />
                    {/* </Route> */}


                    <Route path="/admin" element={<AdminLayout />} />
                    <Route path="manage-users" component={<AdminUsers />} />
                    {/* </Route> */}

                    {/* <Route path="/menu/dessert" element={<Dessert />} /> */}
                </Routes>
            </Router>
            <Footer />
        </React.Suspense>
    );
};
export default ProjectRoutes;
