import React from "react";
import github_banner from '../images/icones/icons-github-250.svg';
import linkedin_banner from '../images/icones/icons-linkedin-250.svg';
import img_banner from '../images/imgBanner.jpg';

const CpBanner = () => {
  return (
    <section className="banner-page">
      <div className="wrap colum-1">
        <div className="title-banner">
          <h1 className="text-banner">
            <p className="nome">Jhuan Gabriel!</p>
            <p className="funcao">Desenvolvedor Web Full-Stack.</p>
            <p className="descricao">Este é meu Pórtifolio, conheça um pouco mais sobre o meu trabalho!</p>
          </h1>
          <div className="btn-portifolio">
            <a href="" target="_blank" className="link-github" rel="noopener noreferrer" >
              <img src={github_banner} alt="GitHub" title="GitHub!" className="github" />
              GitHub
            </a>

            <a href="" target="_blank" className="link-linkedin" rel="noopener noreferrer">
              <img src={linkedin_banner} alt="LinkedIn" title="LinkedIn!" className="LinkedIn" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="box-img-banner">
          <img src={img_banner} alt="Imagem para Apresentação de Projetos Web!" title="Imagem para Apresentação de Projetos Web!" className="img-banner" />
        </div>
      </div>
    </section>
  );
};

// Exporta o Componente para o uso da Aplicação
export default CpBanner;
