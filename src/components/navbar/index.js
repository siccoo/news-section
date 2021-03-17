import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

import NewsLogo from "../../images/NewsLogo.svg";

const Topbar = () => {
    return (
        <div>
            <section className="nav-section">
                <div className="container">
                    {/* NAVIGATION BAR STARTS */}
                    <nav className="navbar navbar-expand-lg navbar-light nav-bg justify-content-sm-start fixed-top" >
                    <Link to={'/'} className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto">
                        <img src={NewsLogo} alt='news-logo' className="news-logo" />
                    </Link>
                    <button className="navbar-toggler align-self-start hidden-sm-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{marginTop: 5 + 'px'}}>
                        <span className="line"></span> 
                        <span className="line"></span> 
                        <span className="line"></span>
                    </button>
                        <div id="navbarNavDropdown" className="navbar-collapse collapse">
                            <form className="navbar form-inline mx-auto">
                                <input className="form-control mr-sm-3" type="search" placeholder="Health Grant" />
                            </form>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-btn1" href="/">A</Link>
                                </li><br />
                                <li className="nav-item">
                                    <Link className="nav-btn1" href="/">A</Link>
                                </li><br />
                                <li className="nav-item">
                                    <Link className="nav-btn1" href="/">A</Link>
                                </li><br />
                            </ul>
                        </div>

                        <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <ul className="list-inline">
                                <li>
                                    <Link className="list-item" to="/">All</Link>
                                </li>
                                <li>
                                    <Link className="list-item" to="/">All</Link>
                                </li>
                                <li>
                                    <Link className="list-item" to="/">All</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    </nav> 
                    
                </div>
                <div className="container">
                    
                </div>
            </section>
        </div>
    )
}

export default Topbar;