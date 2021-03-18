import React from 'react';
// import { Link } from "react-router-dom";
import "./style.css";

import NewsLogo from "../../images/NewsLogo.svg";

const Topbar = () => {
    return (
        <div>
            <section className="nav-section">
                <div className="container">
                    {/* NAVIGATION BAR STARTS */}
                    <nav className="navbar navbar-expand-lg navbar-light nav-bg justify-content-sm-start fixed-top" >
                    <a href='/' className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto">
                        <img src={NewsLogo} alt='news-logo' className="news-logo" />
                    </a>
                    <button className="navbar-toggler align-self-start hidden-sm-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{marginTop: 5 + 'px'}}>
                        <span className="line"></span> 
                        <span className="line"></span> 
                        <span className="line"></span>
                    </button>
                        <div id="navbarNavDropdown" className="navbar-collapse collapse">
                            <form className="navbar-nav form-inline mx-auto">
                                <input className="" type="search" placeholder="Health Grant" />
                            </form>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-btn-1" href="/">A</a>
                                </li><br />
                                <li className="nav-item">
                                    <a className="nav-btn-2" href="/">A</a>
                                </li><br />
                                <li className="nav-item">
                                    <a className="nav-btn-3" href="/">A</a>
                                </li><br />
                            </ul>
                        </div>
                    </nav> 
                    
                </div>
            </section>
        </div>
    )
}

export default Topbar;