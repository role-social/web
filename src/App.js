import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './view/Login';
import Register from './view/Register';
import NotFound from './view/NotFound';
import AdicionarSocial from './view/AdicionarSocial';
import { NormalizeStyles } from './shared/NormalizerStyles';
import Feed from './view/Feed';
import { BaseProvider, LightTheme, ThemeProvider } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <NormalizeStyles />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/adicionar-social"
              exact
              element={<AdicionarSocial />}
            />
            <Route path="/login" exact element={<Login />} />
            <Route path="/cadastro" exact element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
