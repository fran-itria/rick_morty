import React from "react";
import SearchBar from "../search/SearchBar";
import style from './Nav.module.css'
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch }) {

    return (
        <div className={style.navBar}>
            <div className={style.about}>
                <NavLink to='/about' className={({ isActive }) => isActive ? style.active : style.disable}>About</NavLink>
            </div>
            <div  className={style.home}>
                <NavLink to='/home' className={({ isActive }) => isActive ? style.active : style.disable}>Home</NavLink>
            </div>
            <div  className={style.favorites}>
                <NavLink to='/favorites' className={({ isActive }) => isActive ? style.active : style.disable}>Favorites</NavLink>
            </div>
            <div className={style.search}>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}