import React from "react";
import {Row, Col, Container } from 'reactstrap';

import HeaderLinks from "../headerlink/headerLink";
import HeaderIcon from "../headericon/headerIcon";

class HeaderAtas extends React.Component {
    render() {
        return (
            <div id="wrapper" className="header-top section">
                <Container>
                    <Row>
                        <Col xs="6" md="9" className="header-top-links">
                            <HeaderLinks />
                        </Col>
                        <Col xs="6" md="3" className="header-top-social">
                            <HeaderIcon />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default HeaderAtas;