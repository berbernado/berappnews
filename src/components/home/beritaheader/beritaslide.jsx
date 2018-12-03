import React, { Component } from "react";
import { Link } from "react-router-dom";


const BeritaSlide = ({ imgberita, kategoriberita, berita, waktuberita }) => (
    <div className="order-lg-2 col-lg-6 col-12">
            <div className="post-carousel-1">
                <div className="post post-large post-overlay hero-post">
                    <div className="post-wrap">
                        <div className="image">
                            <img src={imgberita} height="30" />
                        </div>
                        <Link to="/" className="category politic">{kategoriberita}</Link>

                        <div className="content">

                            <h2 className="title"><a href="/">{berita}</a></h2>

                            <div className="meta fix">
                                <span className="meta-item date"><i className="fa fa-clock-o"></i>{waktuberita}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

BeritaSlide.PropTypes = {
    imgberita: React.PropTypes.string,
    kategoriberita: React.PropTypes.string,
    berita: React.PropTypes.string,
    waktuberita: React.PropTypes.string
  };

export default BeritaSlide;