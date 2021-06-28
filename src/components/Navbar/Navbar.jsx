import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../SVG/HomeIcon";
import SettingsIcon from "../SVG/SettingsIcon";
import DeleteIcon from "../SVG/DeleteIcon";
import InboxIcon from "../SVG/InboxIcon";
import ChartPieIcon from "../SVG/ChartPieIcon";
import GranaziIcon from "../SVG/GranaziIcon";
import StoreIcon from "../SVG/StoreIcon";
import SalesFunnelIcon from "../SVG/SalesFunnelIcon";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo1">
          <NavLink to="/home" exact className="nav-link">
            <HomeIcon fill="#fff" />
            <span className="link-text">Home Portal</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/inbox" exact className="nav-link">
            <InboxIcon className="nav-link-icons" fill="#fff" />
            <span className="link-text">inbox</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/Configuration" exact className="nav-link">
            <SettingsIcon className="nav-link-icons" fill="#fff" />
            <span className="link-text">Configuration</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard" exact className="nav-link">
            <ChartPieIcon className="nav-link-icons" fill="#fff" />

            <span className="link-text">Dashboard</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/settings" exact className="nav-link">
            <GranaziIcon className="nav-link-icons" fill="#fff" />

            <span className="link-text">Settings</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/marketplace" exact className="nav-link">
            <StoreIcon className="nav-link-icons" fill="#fff" />

            <span className="link-text">Marketplace</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sales" exact className="nav-link">
            <SalesFunnelIcon className="nav-link-icons" fill="#fff" />

            <span className="link-text">Sales</span>
          </NavLink>
        </li>

        <li className="nav-item" id="themeButton">
          <NavLink to="/logout" exact className="nav-link">
            <DeleteIcon className="nav-link-icons" fill="#fff" />
            <span className="link-text">Log out</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
