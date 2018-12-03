import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Tabs from './Tabs';
const KetWaktu = styled.div`
  margin-top:-5px;
  font-size: 11px;
  &:hover {
   color: #00c8fa;
 }
`;


class NewsSide extends Component {
    render() {
        return (
            <Tabs>
                <div label="Popular News">
                    <PopularNews 
                        imgberita="https://akcdn.detik.net.id/community/media/visual/2016/02/10/efae4a44-874f-4f9b-87f9-b80c6bac5d98_169.jpg?w=700&q=90"
                        labelberita="category gadgets"
                        kategoriberita="TEKNOLOGI INFORMASI"
                        berita="Diduga Tutup, Ini yang Sebenarnya Terjadi pada MatahariMall.com"
                        waktuberita="Kamis, 22 Nov 2018 16:18 WIB" 
                    />
                    <PopularNews 
                        imgberita="https://akcdn.detik.net.id/community/media/visual/2018/11/21/f5310293-eb7f-454d-833e-fa3f958c9333_169.jpeg?w=900"
                        labelberita="category travel"
                        kategoriberita="TRAVEL"
                        berita="Rekomendasi Tempat Wisata di Bali: Pura Besakih"
                        waktuberita="Kamis, 22 Nov 2018 16:18 WIB" 
                    />
                </div>
                <div label="Latest News">
                    <LatestNews 
                        imgberita="https://akcdn.detik.net.id/community/media/visual/2018/07/28/0ec88bbf-ea2d-4254-986a-c29673dc3a29_169.jpeg?w=700&q=80"
                        labelberita="category education"
                        kategoriberita="FINANCE"
                        berita="Pemerintah Pinjam Jagung Korporasi, Bagaimana Pengembaliannya?"
                        waktuberita="Kamis, 22 Nov 2018 16:18 WIB" 
                    />
                    <LatestNews 
                        imgberita="https://akcdn.detik.net.id/community/media/visual/2018/11/22/45fbc0c2-d73b-47a0-a1aa-821310c6d0c8_169.jpeg?w=700&q=90"
                        labelberita="category fashion"
                        kategoriberita="HEALTH"
                        berita="Ngatain Gendut Bisa Dipidana, Apa Sih Body Shaming Itu?"
                        waktuberita="Kamis, 22 Nov 2018 16:18 WIB" 
                    />
                </div>
            </Tabs>
        );
    }
}

function PopularNews(props) {
    return <div className="post post-small post-list feature-post post-separator-border">
                <div className="post-wrap">
                
                    <Link to="/" className="image"><img src={props.imgberita} alt="post"/></Link>
                    <div className="content">
                        <h5 className="title">
                            <Link to="/" className="image" style={{ fontSize: 12}}>
                                {props.berita}
                            </Link>
                        </h5>
                        <KetWaktu>
                            <span ><i className="fa fa-clock-o"></i> {props.waktuberita}</span>
                        </KetWaktu>
                    </div> 
                </div>
            </div>         
           ;
}

function LatestNews(props) {
    return <div className="post post-small post-list feature-post post-separator-border">
                <div className="post-wrap">
                
                    <Link to="/" className="image"><img src={props.imgberita} alt="post"/></Link>
                    <div className="content">
                        <h5 className="title">
                            <Link to="/" className="image" style={{ fontSize: 12}}>
                                {props.berita}
                            </Link>
                        </h5>
                        <KetWaktu>
                            <span ><i className="fa fa-clock-o"></i> {props.waktuberita}</span>
                        </KetWaktu>
                    </div> 
                </div>
            </div>         
           ;
}

export default NewsSide;