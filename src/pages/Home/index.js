import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
//import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import "./styles.css";
import categoryRepo from "../../repositories/category"
import PageDefault from "../../components/PageDefault"

function Home() {
  const [dadosIniciais, setCategories] = useState([]);

  useEffect(() => {
    categoryRepo.getAllWithVideo()
      .then((res) => {
        setCategories(res)
      })
      .catch((err) => {
        console.log(err)
      })

  }
    , [])

  return (
    <PageDefault >

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

    </PageDefault>
  );
}

export default Home;
