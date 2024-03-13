import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetail from "../pages/Doctors/DoctorDetail";
import Register from "../pages/Register";
import { Routes, Route } from "react-router-dom";
import MyAccount from "../Dashboard/user-account/MyAccount";
import DashBoard from "../Dashboard/doctor-account/DashBoard";
import ProtectedRoute from "./ProtectedRoute";
import CheckoutSuccess from "../pages/Doctors/CheckoutSuccess";

const routers = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <DashBoard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default routers;
