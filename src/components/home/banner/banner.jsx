import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row, Col, Container } from 'reactstrap';

import logo from '../../../static/images/ecc.png';
import logo2 from '../../../static/images/logo-kanan.png';

const logoKanan = {
    maxWidth: '150px',
    maxHeight: '100px'
  };

class Banner extends Component {
    render() {
        return (
            <div className="header-section section">
                <Container>
                    <Row className="align-items-center">
                        <Col md="4" className="header-logo"> 
                            <Link to="/" className="logo">
                                <img className="img-responsive" src={logo} alt="Logo"/>
                            </Link>
                        </Col>
                        <Col xs="12" md="8" className="header-banner">
                            <div className="banner">
                                <Link to="/">
                                    <img className="img-responsive" src={logo2} alt="Logo" style={logoKanan}/>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Banner;