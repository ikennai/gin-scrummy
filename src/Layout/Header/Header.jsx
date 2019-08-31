import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Styles
import './Header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Gin Scrummy</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Standard <span className="sr-only">(current)</span></a> */}
                            <NavLink className="nav-link" to={`/standard`}>Standard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/fibonacci`}>Fibonacci</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/about/`}>About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
