import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Input } from '../../components/Input/Input';
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  logout,
} from '../../firebase';
import { Button } from '../../components/Button/Button';
import { Container, Content } from './style';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);
  const [msgLogin, setMsgLogin] = useState();

  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

  const login = async () => {
    setLoadingButton(true);
    setMsgLogin('');

    let response = await logInWithEmailAndPassword(email, password);
    _proccessCheckLogin(response);
    setLoadingButton(false);

    navigate('/');
  };

  const _proccessCheckLogin = (obj) => {
    switch (obj.code) {
      case 'auth/invalid-email':
        setMsgLogin('Endereço de email não é válido!');
        break;
      case 'auth/user-disabled':
        setMsgLogin('Usuário desabilitado');
        break;
      case 'auth/user-not-found':
        setMsgLogin('Nenhum usuário encontrado para o email informado');
        break;
      case 'auth/wrong-password':
        setMsgLogin('Senha incorreta!');
        break;
      default:
        if (!obj.operationType)
          setMsgLogin('Ops! Houve um problema ao realizar login!');
        break;
    }
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  return (
    <Container className="full-screen">
      <Content>
        <h1 className="mb-4">
          <strong>Bem-vindo(a).</strong> Por favor, faça login.
        </h1>

        <form action="#" method="get">
          <fieldset>
            <Input
              name="Usuário"
              size="12"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="Senha"
              size="12"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>{msgLogin}</div>
            <p>
              <a href="esqueci-minha-senha">Esqueceu a senha?</a>
            </p>

            <div className="d-grid gap-2">
              <Button
                name="Login"
                color="dark"
                type="submit"
                disabled={loadingButton}
                loadingButton={loadingButton}
                onClick={() => login()}
              />
            </div>

            <div className="hl">
              <span className="or">ou</span>
            </div>

            <div className="col">
              <div
                className="fb btn fb-login-button"
                data-width="100%"
                data-size="large"
                data-button-type="login_with"
                data-layout="default"
                data-auto-logout-link="true"
                data-use-continue-as="false"
              >
                <i className="fa fa-facebook fa-fw"></i> Entrar com Facebook
              </div>

              <div
                id="g_id_onload"
                data-client_id="YOUR_GOOGLE_CLIENT_ID"
                data-login_uri="https://your.domain/your_login_endpoint"
                data-auto_prompt="false"
              ></div>
              <div
                className="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left"
              ></div>
            </div>
          </fieldset>
        </form>
      </Content>
    </Container>
  );
}

export default Login;
