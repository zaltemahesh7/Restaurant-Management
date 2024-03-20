import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Animation from "./components/Animation.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
const Homepage = React.lazy(() => import("./pages/Homepage"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const Orderonline = React.lazy(() => import("./pages/orderonline"));
const Contact = React.lazy(() => import("./pages/Contact"), 12);
const Reservation = React.lazy(() => import("./pages/Reservation"));
const Aboutus = React.lazy(() => import("./pages/Aboutus"));
const Menu = React.lazy(() => import("./pages/Menu"));
const ProjectRoutes = () => {
    return (
        <React.Suspense fallback={<Animation />}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/orderonline" element={<Orderonline />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/menu/dessert" element={<h1>Dessert</h1>} />
                </Routes>
            </Router>
            {/* <Footer /> */}
        </React.Suspense>
    );
};
export default ProjectRoutes;
