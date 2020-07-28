import React from 'react';
import dadosIniciais from './data/dados_iniciais.json';
import Menu from './components/Menu/';
import BannerMain from './components/BannerMain/';
import Carousel from './components/Carousel/';
import Footer from './components/Footer/';


function App() {
  return (
    <div style={{ backgroundColor: '#141414' }}>
      <Menu />      

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Você entenderá que o Linux não morreu e que está cada vez melhor, contando com diversas distribuições gratuitas, venha conhecer um pouquinho deste incrível mundo!"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}      
      />
      <Carousel 
        category={dadosIniciais.categorias[1]}      
      />
      <Carousel 
        category={dadosIniciais.categorias[2]}      
      />
      <Carousel 
        category={dadosIniciais.categorias[3]}      
      />
      <Carousel 
        category={dadosIniciais.categorias[4]}      
      />

      <Footer />

    </div>
  );
};

export default App;
