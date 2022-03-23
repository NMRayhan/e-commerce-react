/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
    return (
        <div className="navbar-container">
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='navbar-items'>
                    <ul>
                        <li><a href="/shopping">Shopping</a></li>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/order-review">Order Review</a></li>
                        <li><a href="/manage-inventory">Manage Inventory</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;