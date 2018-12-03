import React from "react";

import HeaderLinks from "../headerlink/headerLink";
import HeaderIcon from "../headericon/headerIcon";

class HeaderAtas extends React.Component {
    render() {
        return (
            <div id="wrapper" className="header-top section">
                <div className="container">
                    <div className="row">
                        <div className="header-top-links col-md-9 col-6">
                            <HeaderLinks />
                        </div>
                        <div className="header-top-social col-md-3 col-6">
                            <HeaderIcon />
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}


export default HeaderAtas;