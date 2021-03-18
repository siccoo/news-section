import React from 'react';
import Topbar from "../../components/navbar/index";
import "./style.css";

const News = () => {
        return (
            <div>
                <section>
                    <Topbar />
                </section>
                <section className="news">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="news-left">
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                               <div className="news-center">
                                   <p>About 3000 Results Found</p>
                                   <h6>Recommended For You...</h6>
                                   <article></article>
                                </div> 
                            </div>
                            <div className="col-md-3">
                                <div className="news-right">

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

export default News;