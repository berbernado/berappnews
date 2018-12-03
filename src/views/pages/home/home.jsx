import React, { Component } from 'react';

import HeaderAtas from '../../../components/home/header/headeratas';
import Banner from '../../../components/home/banner/banner';
//import Menu from '../../components/home/menu/menu';
//import BreakingNews from '../../components/home/beritaheader/breaking-news';
//import BeritaTop from '../../components/home/beritaheader/beritatop';
//import NewNews from '../../components/home/newnews/newnews';


class Home extends Component {
  render() {
    return (
      <div id="main-wrapper">
         <HeaderAtas/>
         <Banner/>
         
      
      </div>
    );
  }
}

export default Home;
