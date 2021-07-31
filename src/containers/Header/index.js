import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { StyledHeader } from '../../style/StyledHeader.js';
import { } from 'react-icons/all';
import logo from '../../assets/general/Badiiyat.svg';

export default function Header() {
    return (
        <StyledHeader className="header">
            <div className="container">
                <nav className="header__inner">
                    <div className="header__inner-logo">
                        <Link className="header__link-logo" to="/">
                            <img className="header__logo" src={logo} />
                        </Link>
                    </div>
                    <ul className="header__list">
                        <NavLink to="/" exact className="header__list-item">
                            Home
                        </NavLink>
                        <NavLink to="/authors" exact className="header__list-item">
                            Authors
                        </NavLink>
                        {
                            localStorage.token ?
                                <>
                                    <NavLink to="/add-book" exact className="header__list-item">
                                        Add Book
                                    </NavLink>
                                    <NavLink to="/add-author" exact className="header__list-item">
                                        Add Author
                                    </NavLink>
                                </>
                                :
                                <NavLink to="/sign-up" exact className="header__list-item">
                                    Sign Up
                                </NavLink>
                        }
                    </ul>
                    <ul className="header__list">
                        <NavLink to="/profile" exact className="header__list-item">
                            Profile
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    )
}
