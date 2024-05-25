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
import Admin from "./pages/Admin.jsx";
import PaymentConfirmation from "./pages/PaymentConfirmation.jsx";
import ManageReservations from "./pages/ManageReservations.jsx";
const Home = React.lazy(() => import("./pages/Home"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const Orderonline = React.lazy(() => import("./pages/orderonline"));
const Contact = React.lazy(() => import("./pages/Contact"), 120);
const Reservation = React.lazy(() => import("./pages/Reservation"));
const Aboutus = React.lazy(() => import("./pages/Aboutus"));
const Menu = React.lazy(() => import("./pages/Menu"));
const ProjectRoutes = () => {
    let ck = []
    return (
        <React.Suspense fallback={<Animation />}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    {/* <Route path="/Home" element={<Home />} /> */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/menu" element={<Menu setC={ck} />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/orderonline" element={<Orderonline />} />
                    <Route path="/checkout" element={<Checkout cka={ck} />} />
                    <Route path="/confirmation" element={<PaymentConfirmation />} />


                    <Route path="/admin" element={<Admin />} />
                    <Route path="/admin/reservations" component={<ManageReservations />} />

                    {/* <Route path="/menu/dessert" element={<Dessert />} /> */}
                </Routes>
            </Router>
            <Footer />
        </React.Suspense>
    );
};
export default ProjectRoutes;
