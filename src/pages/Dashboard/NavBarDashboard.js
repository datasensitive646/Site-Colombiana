import React, { useContext } from "react";
import { NavBar } from "./styles";
import { Link } from "react-router-dom";
import { Context } from "../../context";

import LogoItau from "../../assets/Imagens/itau.png";
import { auth } from "../../services/firebaseConnection";

export default function NavBarDashboard() {
  const { logOut, user } = useContext(Context);

  async function deslogar() {
    await logOut();
  }

  return (
    <NavBar>
      <button onClick={deslogar} className="btnDesconectar">
        Desconectar!
      </button>
    </NavBar>
  );
}
