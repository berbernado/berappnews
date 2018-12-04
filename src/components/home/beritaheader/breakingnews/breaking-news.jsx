import React, { Component } from "react";
import {Row, Col, Container } from 'reactstrap';
//import { Link } from "react-router-dom";
import {NewsTicker} from "react-announcement-ticker";


const newsList=[
    {
        text: "Facebook is making its biggest executive shuffle in company",
        link: "/"
    },
    {
        text: "The Best Views of NASA's InSight Mars Lander Launch?",
        link: "/"
    },
    {
        text: "Are Jupiter and Venus Messing With Earth's Climate?",
        link: "/"
    }
];
class BreakingNews extends Component {
    render() {
        return (
            <div className="breaking-news-section section">
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="breaking-news-wrapper">
                                <h5 className="breaking-news-title float-left">Breaking News</h5>
                                <NewsTicker style={{ color: "#ffffff !important"}}
                                    newsList={newsList}
                                />
                               
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}



export default BreakingNews;