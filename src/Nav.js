import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="navbar-brand">Logo</Link>
                <ul>
                    <li>
                        <Link to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;