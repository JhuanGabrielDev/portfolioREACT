import React, { useState } from "react";
import LogotipoHeader from '../images/logotipoJP.png';

const CpHeader = () => {
    // Gerenciar o estado/comportamento do MENU Mobile, no caso, em estado de desativado!
    const [classOn, setClassOn] = useState(false);
    return (
        <header className="topo">
            <section className="container">
                <div className="logotipo">
                    <img src={LogotipoHeader} alt="Portifólio JP!" title="Portifólio JP!" className="img-logotipo" />
                </div>
                {/* ClassOn junto com o onclik vai manipular a ação de ativar e desativar o MENU Mobile de acordo com o clique do usuario!*/}
                <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <nav>
                        <ul>
                            <li className="nav-item"><a href="#topo">home</a></li>
                            <li className="nav-item"><a href="#about">quem sou</a></li>
                            <li className="nav-item"><a href="#projects">portifólio</a></li>
                            <li className="nav-item"><a href="#contact">contato</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    )
}
export default CpHeader;