/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderIcon() {
    return (
        <div className="header-social">
            <Link to="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></Link>
            <Link to="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></Link>
            <Link to="#"><FontAwesomeIcon icon={['fab', 'google-plus-g']} /></Link>
            <Link to="#"><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></Link>
            <Link to="#"><FontAwesomeIcon icon={['fab', 'youtube']} /></Link>
            <Link to="#"><FontAwesomeIcon icon={['fab', 'vimeo-v']} /></Link>
        </div>
        
      );
}

export default HeaderIcon;
