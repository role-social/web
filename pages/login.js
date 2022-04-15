import Head from 'next/head';
import Image from 'next/image';

import loading_giff from '../assets/gifs/loading.gif';
import styles from '../styles/Login.module.css';

import Header from '../components/header';
import { auth, logInWithEmailAndPassword } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, loadingAuth, error] = useAuthState(auth);

  const [msgEmail, setMsgEmail] = useState();
  const [msgSenha, setMsgPassword] = useState();
  const [msgGeneral, setMsgGeneral] = useState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) return;

    console.log(user);
  }, [user, loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setMsgEmail();
    setMsgPassword();
    setMsgGeneral();

    logInWithEmailAndPassword(email, password)
      .then((response) => {
        router.push('/cadastre-se');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            setMsgEmail('O endereço de email não é válido!');
            break;
          case 'auth/user-disabled':
            setMsgEmail('Endereço de email desabilitado!');
            break;
          case 'auth/user-not-found':
            setMsgEmail('Usuário não encontrado!');
            break;
          case 'auth/wrong-password':
            setMsgPassword('Senha inválida!');
            break;
          default:
            setMsgGeneral('Problema ao tentar logar!');
            break;
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
  };

  return (
    <>
      <Header />

      <div className={styles.login}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entre com seu email"
              maxLength="44"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Text className="text-muted">{msgEmail}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entre com a senha"
              maxLength="20"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Text className="text-muted">{msgSenha}</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            {!loading && 'Login'}
            {loading && (
              <Image
                src={loading_giff}
                alt="loading giff"
                height={20}
                width={20}
              />
            )}
          </Button>
          <Form.Text className="text-muted">{msgGeneral}</Form.Text>
        </Form>
      </div>
    </>
  );
}
