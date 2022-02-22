import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NovedadesPage from './pages/NovedadesPage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <BrowserRouter>
        <Header />
         <Nav />
          <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="novedades" element={<NovedadesPage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
       </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
