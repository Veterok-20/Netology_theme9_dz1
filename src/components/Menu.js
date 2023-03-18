import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Menu() {
    const setActive = ({ isActive }) =>(isActive ? " menu__item-active" : "menu__item");
    return (
        <>
            <nav className="menu">
                <NavLink className={setActive} to="/">Главная</NavLink>
                <NavLink className={setActive} to="/drift">Дрифт-такси</NavLink>
                <NavLink className={setActive} to="/timeattack">Time Attack</NavLink>
                <NavLink className={setActive} to="/forza">Forza Karting</NavLink>
            </nav>           
        </>)
} 

