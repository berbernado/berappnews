import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row, Col, Container } from 'reactstrap';

import MainMenu from "../components/mainmenu/mainmenu";
import MenuSearch from "../components/menusearch/menusearch";
import MenuMobile from "../components/menumobile/menumobile";
import logo from '../../../../assets/images/logo-white.png';


class Menu extends Component {
    render() {
        return (
            <div className="menu-section section bg-dark" >
                <Container>
                    <Row>
                        <Col>
                            <div className="menu-section-wrap">
                                <MainMenu />
                                    
                                <div className="mobile-logo d-none d-block d-md-none">
                                    <Link to="/"><img className="img-responsive" src={logo} alt="Logo"/></Link>
                                </div>
                                <MenuSearch />
                                <MenuMobile />
                                <div className="mobile-menu"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}


export default Menu;