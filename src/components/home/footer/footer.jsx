import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row, Col, Container } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div className="footer-bottom-section section bg-dark">
                <Container>
                    <Row>
                        <Col className="copyright text-center"> 
                            <p>Copyright © 2017 <Link to="https://www.indonesiapower.co.id">Indonesia Power</Link>. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default Footer;