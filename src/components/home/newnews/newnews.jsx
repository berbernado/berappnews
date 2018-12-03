import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import NewsSide from "../newsside/newsside";

const Judul = styled.div`
  margin-top:-5px;
  font-size: 11px;
  &:hover {
   color: #00c8fa;
 }
`;

const Selengkapnya = styled.span`
  border-top: 1px solid #00c8fa;
  &:hover {
   color: #00c8fa;
 }
`;


const Linknya = ({ className, children, tolink }) => (
    <Link to={tolink} className={className} >{children} <i className="fa fa-arrow-right"></i></Link>
  );
  
  const StyledLink = styled(Linknya)`
    color: #7f7979;
    font-size: 11px;
    margin-top:7px;
  `;
  

class NewNews extends Component {
    render() {
        return (
            <div className="post-section section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 mb-50">
                            <div className="post-block-wrapper">
                                <div className="head education-head">
                                    <h4 className="title">Featured News</h4>
                                </div>
                                <div className="body pb-0">
                                    <div className="row">
                                        <div className="col-md-12 col-12 mb-20">
                                        <BeritaSide 
                                            imgberita="https://akcdn.detik.net.id/community/media/visual/2016/02/10/efae4a44-874f-4f9b-87f9-b80c6bac5d98_169.jpg?w=700&q=90"
                                            labelberita="category gadgets"
                                            kategoriberita="TEKNOLOGI INFORMASI"
                                            berita="Diduga Tutup, Ini yang Sebenarnya Terjadi pada MatahariMall.com"
                                            waktuberita="10 November 2018" 
                                        />
                                        <BeritaSide 
                                            imgberita="https://akcdn.detik.net.id/community/media/visual/2018/11/21/f5310293-eb7f-454d-833e-fa3f958c9333_169.jpeg?w=900"
                                            labelberita="category travel"
                                            kategoriberita="TRAVEL"
                                            berita="Rekomendasi Tempat Wisata di Bali: Pura Besakih"
                                            waktuberita="Kamis, 22 Nov 2018 16:18 WIB" 
                                        />
                                        </div>
                                        
                                        
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <NewsSide />
                    </div>
                </div>
            </div>
           
        );
    }
}

function BeritaSide(props) {
    return <div className="post post-small post-list feature-post post-separator-border">
                <div className="post-wrap">
                
                    <Link to="/" className="image"><img src={props.imgberita} alt="post"/></Link>
                    <div className="content">
                        <Judul>
                            <span >{props.kategoriberita} | <i className="fa fa-clock-o"></i> {props.waktuberita}</span>
                        </Judul>
                        <h5 className="title"><Link to="/" className="image">{props.berita}</Link></h5>
                        <Selengkapnya>
                            <StyledLink tolink="/">Selengkapnya</StyledLink>
                        </Selengkapnya>
                        
                    </div> 
                </div>
            </div>         
           ;
}



export default NewNews;