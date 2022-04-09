import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  logout,
} from '../../firebase';
import loading_gif from '../../assets/gifs/loading.gif';

import style from '../login/style.module.css';
import { useRouter } from 'next/router';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);
  const [msg_login, setMsg_login] = useState('Usuário ou senha inválido');

  const [user, loading, error] = useAuthState(auth);

  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    // if(user) navigate("/dashboard");
  }, [user, loading]);

  const login = (e) => {
    e.preventDefault();
    try {
      setLoadingButton(true);
      logInWithEmailAndPassword(email, password);
    } catch (e) {
    } finally {
      setLoadingButton(false);
    }
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.container_login}>
          <div className={style.wrap_login}>
            <form className={style.login_form}>
              <span className={style.login_form_title}> ROLÊ </span>
              <div className={style.wrap_input}>
                <input
                  className={email !== '' ? 'has-val input' : 'input'}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className={style.focus_input} data-placeholder="Email" />
              </div>
              <div className="wrap-input">
                <input
                  className={password !== '' ? 'has-val input' : 'input'}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Password" />
              </div>

              <label>{msg_login}</label>

              <div className="container-login-form-btn">
                <button className="login-form-btn" onClick={login}>
                  {!loadingButton && <>Login</>}
                  {loadingButton && (
                    <>
                      <img src={loading_gif} alt="loading giff" width={20} />
                    </>
                  )}
                </button>
              </div>
              <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <a onClick={() => router.push('/register')}>Criar conta</a>
              </div>
            </form>
          </div>
        </div>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
}

export default Login;
