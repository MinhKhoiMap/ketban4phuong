import React from "react";
import "./index.css";
import MatchesCard from "../MatchesCard";
import ProfileCard from "../ProfileCard";
import EditProfileCard from "../EditProfileCard";
import { Outlet, Route, Routes } from "react-router-dom";

const MyWallMain = () => {
  return (
    <div className="mywall__main-wrapper">
      <div className="mywall__main-card">
        <Outlet />
      </div>
    </div>
  );
};

export default MyWallMain;
