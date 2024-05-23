// Router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Register from "./Register/Register";
import InternalPage from "./InternalPage/InternalPage";
import JobPostingInternalPage from "./JobPostingInternalPage/JobPostingInternalPage";
import Login from "./Login/Login";
import TopCompniesInternalPage from "./TopCompniesInternalPage/TopCompniesInternalPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        <Route
          exact
          path="/TopCompanies"
          element={<TopCompniesInternalPage />}
        />
        <Route exact path="/job/:name" element={<JobPostingInternalPage />} />
        <Route exact path="/:name" element={<InternalPage />} />
        <Route path="*" element={<p>Invalid Path</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
