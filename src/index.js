import React from 'react';
import ReactDOM from 'react-dom/client';
// HashRouter ao invés de BrowserRouter para funcionar no Netlify
import { HashRouter, Routes, Route } from 'react-router-dom';
import './Styles/global.css';

import Navbar from './components/Menu';
import QuemSomos from './components/QuemSomos';
import Home from './components/Home';
import Footer from './components/Footer';
import Contato from './components/Contato';
import NotFound from './components/NotFound';
import Tratamentos from './components/Tratamentos';
import Whatsapp from './components/Whatsapp';
import Qualidade from './components/Qualidade';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/qualidade" element={<Qualidade />} />
        <Route path="/tratamentos/:item" element={<Tratamentos />} />
        <Route path="/servicos/:item" element={<Tratamentos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Whatsapp />
    </HashRouter>
  </React.StrictMode>
);
