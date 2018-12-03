/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";


function HeaderIcon() {
    return (
        <div className="header-social">
            <Link to="#"><i className="fa fa-facebook"></i></Link>
            <Link to="#"><i className="fa fa-twitter"></i></Link>
            <Link to="#"><i className="fa fa-google-plus"></i></Link>
            <Link to="#"><i className="fa fa-pinterest-p"></i></Link>
            <Link to="#"><i className="fa fa-youtube-play"></i></Link>
            <Link to="#"><i className="fa fa-vimeo"></i></Link>
        </div>
        
      );
}

export default HeaderIcon;
