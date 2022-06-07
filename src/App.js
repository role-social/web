import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './view/Login';
import Register from './view/Register';
import NotFound from './view/NotFound';
import AdicionarSocial from './view/AdicionarSocial';
import { NormalizeStyles } from './shared/NormalizerStyles';
import Feed from './view/Feed';

function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" exact element={<AdicionarSocial />} /> */}
          <Route path="/" exact element={<Feed />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/cadastro" exact element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
