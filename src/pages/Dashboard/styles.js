import styled from "styled-components"


export const Wrapper = styled.nav`
  flex-direction: row;
  display: flex;
`;

export const NavBar = styled.nav`
  width: 20%;
  height: 100vh;
  background-color: #1A84BF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .dadosPerfil{
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #2290CD;
    padding-bottom: 20px;
  }

  .boxFotoAgencia{
   display: flex;
   flex-direction: column;
   align-items: center;
  }

  .fotoPerfilAgencia{
    width: 130px;
    height: 130px;
    border-radius: 100%;
    margin-top: 30px;
    margin-bottom: 15px;
    object-fit: cover;
    -webkit-filter: drop-shadow(5px 5px 5px #333);
    filter: drop-shadow(5px 5px 5px #333);
  }

  .boxFotoAgencia span{
    color: white;
    font-size: 19px;
    text-align: center;
    text-transform: capitalize;
  }

  .headerLinks{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .headerLinks a{
    color: #fff;
    padding-bottom: 10px;
    text-decoration: none;
    text-transform: capitalize;
  }

  .headerLinks a:hover{
    color: #FFBF44;
    text-decoration: underline;
    text-underline-offset: 7px;
    text-decoration-color: #FFBF44;
  }

  .containerBotao{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    
  }

  .btnDesconectar{
    width: 80%;
    height: 50px;
    border: none;
    background-color: #fff;
    border-radius: 8px;
    font-weight: bold;
    letter-spacing: 1.5px;
    color: #1A84BF;
    -webkit-box-shadow: 2px 6px 21px -3px #0e5276;
    -moz-box-shadow: 2px 6px 21px -3px #0e5276;
    box-shadow: 2px 6px 21px -3px #0e5276;
  }

  

`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;

  header{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    justify-content: space-between;
    -webkit-box-shadow: 2px 6px 15px -3px #ccc;
    -moz-box-shadow: 2px 6px 15px -3px #ccc;
    box-shadow: 2px 6px 15px -3px #ccc;
  }

  .titulo-dashboard{
    font-size: 1.7rem;
    color: #1A84BF;
    font-weight: bold;
    letter-spacing: 1.5px;
    font-weight: 600;
  }

  .btn-nova-atracao{
    background-color: #fff;
    border: none;
    font-size: 1rem;
    color: #000;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-decoration: underline;
    text-underline-offset: 5px;
    transition: 0.2s;
  }

  .btn-nova-atracao:hover{
    color: #FFBF44;
    text-decoration-color: #FFBF44;
  }

  .containerAtracoes{
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    justify-content: center;
  }

  .divInformacoes{
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 10em;
  }

  .divInformacoes p{
    font-size: 19px;
  }



`;

export const Atracao = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #197DB5;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  transition: 0.3s;
  
  

  .nomeAtracao{
    color: #fff;
    font-size: 1.5rem;
  }

  :hover{
    transform: scale(0.9);
  }

`;