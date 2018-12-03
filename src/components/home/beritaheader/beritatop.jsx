import React, { Component } from "react";
import { Link } from "react-router-dom";



class BeritaTop extends Component {
    render() {
        return (
            <div className="hero-section section mt-30 mb-30">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row row-1">
                                <div className="order-lg-1 col-lg-6 col-12">
                                    <div className="post-carousel-1">
                                        <BeritaSlide 
                                            imgberita="https://akcdn.detik.net.id/community/media/visual/2018/11/18/dcbcb549-451b-4860-99d3-2fbccf233e71_169.jpeg?w=700&q=80"
                                            labelberita="category sports"
                                            kategoriberita="SPORTS"
                                            berita="Rossi: Perkembangan Yamaha Tak Sebaik Tim Lain"
                                            waktuberita="10 November 2018" 
                                        />
                                    </div>
                                </div>
                                <div className="order-lg-2 col-lg-3 col-12">
                                    <div className="row row-1">
                                        <BeritaKotak 
                                            imgberita="https://akcdn.detik.net.id/community/media/visual/2016/02/10/efae4a44-874f-4f9b-87f9-b80c6bac5d98_169.jpg?w=700&q=90"
                                            labelberita="category gadgets"
                                            kategoriberita="TEKNOLOGI INFORMASI"
                                            berita="Diduga Tutup, Ini yang Sebenarnya Terjadi pada MatahariMall.com"
                                            waktuberita="10 November 2018" 
                                        />
                                        <BeritaKotak 
                                            imgberita="https://akcdn.detik.net.id/community/media/visual/2018/11/21/f5310293-eb7f-454d-833e-fa3f958c9333_169.jpeg?w=900"
                                            labelberita="category travel"
                                            kategoriberita="TRAVEL"
                                            berita="Rekomendasi Tempat Wisata di Bali: Pura Besakih"
                                            waktuberita="10 November 2018" 
                                        />
                                    </div>
                                </div>
                                <div className="order-lg-3 col-lg-3 col-12">
                                    <div className="row row-1">
                                        <BeritaKotak 
                                            imgberita="https://akcdn.detik.net.id/community/media/visual/2018/07/28/0ec88bbf-ea2d-4254-986a-c29673dc3a29_169.jpeg?w=700&q=80"
                                            labelberita="category education"
                                            kategoriberita="FINANCE"
                                            berita="Pemerintah Pinjam Jagung Korporasi, Bagaimana Pengembaliannya?"
                                            waktuberita="10 November 2018" 
                                        />
                                        <BeritaKotak 
                                            imgberita="https://akcdn.detik.net.id/community/media/visual/2018/11/22/45fbc0c2-d73b-47a0-a1aa-821310c6d0c8_169.jpeg?w=700&q=90"
                                            labelberita="category fashion"
                                            kategoriberita="HEALTH"
                                            berita="Ngatain Gendut Bisa Dipidana, Apa Sih Body Shaming Itu?"
                                            waktuberita="10 November 2018" 
                                        />
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

function BeritaSlide(props) {
    return <div className="post post-large post-overlay hero-post">
                <div className="post-wrap">
                    <div className="image">
                        <img src={props.imgberita} alt="post"/>
                    </div>
                    <Link to="/" className={props.labelberita}>{props.kategoriberita}</Link>

                    <div className="content">
                        <h2 className="title"><a href="/">{props.berita}</a></h2>
                        <div className="meta fix">
                            <span className="meta-item date"><i className="fa fa-clock-o"></i>{props.waktuberita}</span>
                        </div>
                    </div>
                </div>
            </div>            
           ;
}


function BeritaKotak(props) {
    return <div className="post post-overlay hero-post col-lg-12 col-md-6 col-12">
                <div className="post-wrap">
                    <div className="image">
                        <img src={props.imgberita} alt="post"/>
                    </div>
                    <Link to="/" className={props.labelberita}>{props.kategoriberita}</Link>

                    <div className="content">
                        <h2 className="title"><a href="/">{props.berita}</a></h2>
                        <div className="meta fix">
                            <span className="meta-item date"><i className="fa fa-clock-o"></i>{props.waktuberita}</span>
                        </div>
                    </div>
                </div>
            </div>            
           ;
}
export default BeritaTop;