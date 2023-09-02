import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

import "./styles.css";

export default function Manutencao() {
  return (
    <div className="containerManutencao">
      <div className="headerError">
        <FiAlertTriangle size={65} />
        Ops! Desculpe-nos. Estamos melhorando nossos serviços. Tente novamente
        mais tarde.
      </div>

      <a href="/">
        <button>
          <span>Voltar ao Início</span>
        </button>
      </a>
    </div>
  );
}
