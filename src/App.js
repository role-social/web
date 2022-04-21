import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './view/Login';
import Register from './view/Register';
import NotFound from './view/NotFound';
import Principal from './view/Principal';
import { NormalizeStyles } from './shared/NormalizerStyles';

function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Principal />} />
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
