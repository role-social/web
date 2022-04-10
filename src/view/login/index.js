import './style.css';
import loading_gif from '../../assets/gifs/loading.gif';

import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  logout,
} from '../../firebase';

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
    <div id="login">
      <h1>
        <strong>Bem-vindo(a).</strong> Por favor, faça login.
      </h1>

      <form action="#" method="get">
        <fieldset>
          <p>
            <input type="text" required placeholder="Usuario" />
          </p>

          <p>
            <input type="password" required placeholder="Senha" />
          </p>

          <p>
            <a href="esqueci-minha-senha">Esqueceu a senha?</a>
          </p>

          <p>
            <input type="submit" value="Login" onClick={() => login()} />
          </p>
        </fieldset>
      </form>

      <div className="or"></div>

      <p>
        <div
          className="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="login_with"
          data-layout="default"
          data-auto-logout-link="true"
          data-use-continue-as="false"
        ></div>
      </p>

      <p>
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
      </p>
    </div>
  );
}

export default Login;
