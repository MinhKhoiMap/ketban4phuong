import React from "react";
import "./index.css";
import MyWallNavi from "../MyWallNavi";
import MyWallFeature from "../MyWallFeature";
import MyProfile from "../MyProfile";
import { Outlet } from "react-router-dom";
import MatchesPending from "../MatchesPending";

const MyWallAside = () => {
  return (
    <div className="mywall__controller">
      <MyWallNavi />
      <Outlet />
    </div>
  );
};

export default MyWallAside;
