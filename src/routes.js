import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Inicio from './pages/Inicio';
import Recursos from './pages/Recursos';
import Ajuda from './pages/Ajuda';
import Download from './pages/Download';
import TermosDeUso from './pages/Termos_de_uso';
import Error from './pages/Error';
import Header from './componentes/Header';

export default function RoutesApp(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/download" element={<Download/>} />
        {/* <Route path="/recursos" element={<Recursos/>} /> */}
        <Route path="/termos-de-uso" element={<TermosDeUso/>} />
        <Route path="/ajuda" element={<Ajuda/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}