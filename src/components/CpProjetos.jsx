import React from "react";
import layout_site from '../images/layoutSite.jpeg';
import icon_github from '../images/icones/icons-github-250.svg';


const CpProjetos = () => {

    // Váriavel Constante Array para manipular dinamicamente os dados do Card

    const projetos = [
        // Primeira Posição do Array = 0.
        {
            imagem: layout_site,
            titulo: "Projetos Web - Front-End",
            decricao: "Projeto para Site Corporativo.",
            link: "https://github.com/",
        },
        // Segunda Posição do Array = 1.
        {
            imagem: layout_site,
            titulo: "Projetos Web - Front-End",
            decricao: "Projeto para Site Corporativo.",
            link: "https://github.com/"
        },
        // Terceira Posição do Array = 2.
        {
            imagem: layout_site,
            titulo: "Projetos Web - Front-End",
            decricao: "Projeto para Site Corporativo.",
            link: "https://github.com/"
        },

        // Quarta Posição do Array =3
        {
            imagem: layout_site,
            titulo: "Projetos Web - Front-End",
            decricao: "Projeto para Site Corporativo.",
            link: "https://github.com/"
        }

    ];

    // Vamos montar o Card com os dados passados no Array anterior e executar o FOR.

    const cards = [];

    for (let i = 0; i < projetos.length; i++) {
        cards.push(
            <div className="wrap">
            <div className="card-projects" key={i}>
                <img src={projetos[i].imagem} alt="Projeto Web!" title="Projeto Web!" className="img-card" />
                <h3 className="title-card">{projetos[i].titulo}</h3>
                <span className="info-projects">{projetos[i].descricao}.</span>
                <a href="https://github.com/" target="_blank" className="rep-github" rel="noopener noreferrer">
                    <img src={icon_github} alt="" title="" className="img-github" />
                    Repositório GitHub
                </a>
            </div>
            </div>
        )
    }

    return (
        <section className="projects" id="projects">
                <h1 className="title-projects">Portifólio (Projetos)</h1>
                <h2 className="text-projects">Esses são alguns dos Projetos Web desenvolvidos, utilizando recursos de Front-End</h2>


                <div className="grid-projects">
                    {/* {Chamada da Porgramação Javascript para execução dos Cards} */}
                    {cards}
                </div>
          
        </section>
    )
}

export default CpProjetos;