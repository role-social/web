import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './view/login';
import Register from './view/register';
import NaoEncontrada from './view/naoEncontrada';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
        <Route path="*" element={<NaoEncontrada />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
