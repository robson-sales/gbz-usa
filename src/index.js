import React from 'react';
import ReactDOM from 'react-dom/client';
// HashRouter ao invés de BrowserRouter para funcionar no Netlify
import { HashRouter, Routes, Route } from 'react-router-dom';
import './Styles/global.css';

import Navbar from './components/Menu';
import QuemSomos from './components/AboutUs';
import Home from './components/Home';
import Footer from './components/Footer';
import Contato from './components/ContactUs';
import NotFound from './components/NotFound';
import Tratamentos from './components/Coatings';
import Whatsapp from './components/Whatsapp';
import Qualidade from './components/Quality';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<QuemSomos />} />
        <Route path="/quality" element={<Qualidade />} />
        <Route path="/coatings/:item" element={<Tratamentos />} />
        <Route path="/services/:item" element={<Tratamentos />} />
        <Route path="/contact-us" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Whatsapp />
    </HashRouter>
  </React.StrictMode>
);
