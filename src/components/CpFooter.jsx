import React from "react";

import logotipo_footer from '../images/logotipoJP.png'
import linkedin_footer from '../images/icones/iconsLinkedin.png'
import github_footer from '../images/icones/iconsGithub.png'
import youtube_footer from '../images/icones/iconsYoutube.png'
import facebook_footer from    '../images/icones/iconsFacebook.png'
import instagram_footer from '../images/icones/iconsInstagram.png'
import behance_footer from '../images/icones/iconsBehance.png'


const CpFooter = () => {
    return (
        
        <footer className="end-page">
            <section className="rs-footer">
                <div className="wrap">
                    <h1 className="title-rs">Redes Sociais!</h1>
                    <div className="icon-rs">
                        <ul className="ul-linkrs">
                            <li>
                                <a href="" target="_blank" className="link-rs" rel="noopener noreferrer">
                                    <img src={linkedin_footer} alt="LinkedIn" className="icon-img"/>
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank" className="link-rs" rel="noopener noreferrer">
                                    <img src={github_footer} alt="GitHub" className="icon-img"/>
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank" className="link-rs" rel="noopener noreferrer">
                                    <img src={youtube_footer} alt="Youtube" className="icon-img"/>
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank" className="link-rs" rel="noopener noreferrer">
                                    <img src={facebook_footer} alt="Facebook" className="icon-img"/>
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank" className="link-rs" rel="noopener noreferrer">
                                    <img src={instagram_footer} alt="Instagram" className="icon-img"/>
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank" className="link-rs" rel="noopener noreferrer">
                                    <img src={behance_footer} alt="Behance" className="icon-img"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="copy">
                <div className="wrap">
                    <div className="info-copy">
                        <p>Todos os direitos reservados © 2024/2025</p>
                        <a href="">
                            <img src={logotipo_footer} alt="JP Portifolio" title="JP Portifolio" className="logotipo-copy"/>
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default CpFooter;