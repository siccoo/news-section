import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

import NewsLogo from "../../images/NewsLogo.svg";

const Topbar = () => {
    return (
        <div>
             {/* NAVIGATION BAR STARTS */}
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={NewsLogo} alt="news-logo" className="news-logo" />
                </a>
                <form className="form-inline ml-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <div className="">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-btn1" href="/">Documentation</Link>
                        </li><br />
                        <li className="nav-item">
                            <Link className="nav-btn" href="/">Buy now</Link>
                        </li><br />
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Topbar;