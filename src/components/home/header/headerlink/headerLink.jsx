/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

function HeaderLink() {
   
    return (
        <ul className="header-links">
            <li className="disabled block d-none d-md-block">
                <Link to="/">
                    <i className="fa fa-clock-o"></i> Sunday, March 25, 2017
                </Link>
            </li>
            <li className="d-none d-md-block">
                <Link to="/">
                    <i className="fa fa-mixcloud"></i> 
                    <span className="weather-degrees">20 
                        <span className="unit">c</span> 
                    </span> 
                    <span className="weather-location">- Jakarta</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <i className="fa fa-user-circle-o"></i>Sign Up
                </Link>
            </li>
            <li>
                <Link to="/">
                    <i className="fa fa-headphones"></i>Contact
                </Link>
            </li>
            <li>
                <Link to="/">Blog</Link>
            </li>
        </ul>
      );
}


export default HeaderLink;
