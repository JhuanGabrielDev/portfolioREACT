import React from "react";
import btnNavInicioImg from '../images/btnNavInicio.png';

const CpBtnInicio = () => {
  return (
    <div className="btn-nav">
      <a href="#top">
        <img src={btnNavInicioImg} alt="Voltar para o início!" title="Voltar para o início!" className="btn-nav-topo" />
      </a>
    </div>
  );
};

export default CpBtnInicio;
