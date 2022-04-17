import './style.css';
import loading_gif from '../../assets/gifs/loading.gif';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Input } from './../../components/Input/Input';
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  logout,
} from '../../firebase';
import styled from 'styled-components';
import { Button } from '../../components/Button/Button';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0 auto;

  .btn {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none; /* remove underline from anchors */
  }

  .btn:hover {
    opacity: 1;
  }

  .fb {
    background-color: #3b5998;
    color: white;
  }

  .twitter {
    background-color: #55acee;
    color: white;
  }

  .google {
    background-color: #dd4b39;
    color: white;
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);
  const [msg_login, setMsg_login] = useState();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;

    console.log(user);
  }, [user, loading]);

  const login = (e) => {
    e.preventDefault();
    try {
      setLoadingButton(true);
      logInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log('chegou');
    } finally {
      setLoadingButton(false);
    }
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  return (
    <Container>
      <Content>
        <h1>
          <strong>Bem-vindo(a).</strong> Por favor, faça login.
        </h1>

        <form action="#" method="get">
          <fieldset>
            <Input name="Usuário" size="12" />
            <Input name="Senha" size="12" />
            <p>
              <a href="esqueci-minha-senha">Esqueceu a senha?</a>
            </p>

            <div className="d-grid gap-2">
              <Button
                name="Login"
                color="dark"
                type="submit"
                onClick={() => login()}
              />
            </div>

            <div className="or"></div>

            <div class="col">
              <div
                class="fb btn fb-login-button"
                data-width="100%"
                data-size="large"
                data-button-type="login_with"
                data-layout="default"
                data-auto-logout-link="true"
                data-use-continue-as="false"
              >
                <i class="fa fa-facebook fa-fw"></i> Entrar com Facebook
              </div>
              <div href="#" class="twitter btn">
                <i class="fa fa-twitter fa-fw"></i> Entrar com Twitter
              </div>
              <div
                id="g_id_onload"
                data-client_id="YOUR_GOOGLE_CLIENT_ID"
                data-login_uri="https://your.domain/your_login_endpoint"
                data-auto_prompt="false"
              ></div>
              <div
                class="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left"
              >
                <i class="fa fa-google fa-fw"></i> Entrar com Google+
              </div>
            </div>
          </fieldset>
        </form>
      </Content>
    </Container>
  );
}

export default Login;
