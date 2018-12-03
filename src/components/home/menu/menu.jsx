import React, { Component } from "react";
import { Link } from "react-router-dom";


import MainMenu from "./mainmenu";
import MenuSearch from "./menusearch";
import MenuMobile from "./menumobile";
import logo from '../../../static/images/logo-white.png';


class Menu extends Component {
    render() {
        return (
            <div className="menu-section section bg-dark" >
                <div className="container">
                    <div className="row">
                        <div className="col-12" >
                            <div className="menu-section-wrap">
                                <MainMenu />
                                    
                                <div className="mobile-logo d-none d-block d-md-none">
                                    <Link to="/"><img className="img-responsive" src={logo} alt="Logo"/></Link>
                                </div>
                                <MenuSearch />
                                <MenuMobile />
                                <div className="mobile-menu"></div>
                            </div>                                  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Menu;