import React, { Component } from 'react';

import HeaderAtas from '../../../components/home/header/headeratas';
import Banner from '../../../components/home/banner/banner';
import Menu from '../../../components/home/menu/views/menu';
import BreakingNews from '../../../components/home/beritaheader/breakingnews/breaking-news';
import BeritaTop from '../../../components/home/beritaheader/beritatop/beritatop';
import NewNews from '../../../components/home/newnews/newnews';
import Footer from '../../../components/home/footer';

class Home extends Component {
  render() {
    return (
      <div id="main-wrapper">
         <HeaderAtas/>
         <Banner/>
         <Menu/>
         <BreakingNews/>
         <BeritaTop/>
         <NewNews/>
         <Footer/>
      </div>
    );
  }
}

export default Home;
