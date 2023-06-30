import React from "react";
// import { Route, Routes } from "react-router-dom";
// Copy code
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
// import ExpenseForm from "../Routes/ExpenseForm/ExpenseForm";
// import ForgotPassword from "../Routes/ForgotPassword/ForgotPassword";
// import Home from "../Routes/Home/Home";
// import Login from "../Routes/Login/Login";
// import PrivateRoute from "../Routes/PrivateRoutes/PrivateRoute";
import SignUp from "../Pages/Signup/Signup";
// import UpdateProfile from "../Routes/UpdateProfile/UpdateProfile";

const AllRotes = () => {
  return (
    <Router>
       < Routes>
      {/* <Route path="/" element={<Home />}></Route>
      <Route
        path="/ExpenseForm"
        element={
          <PrivateRoute>
            <ExpenseForm />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/Login" element={<Login />}></Route> */}
      <Route path="/SignUp" element={<SignUp />}></Route>
      {/* <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
      <Route
        path="/UpdateProfile"
        element={
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        }
      ></Route> */}
      </ Routes>
    </Router>
  );
};

export default AllRotes;
