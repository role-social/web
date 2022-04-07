import React, {useEffect} from 'react';
import { useState } from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword, signInWithGoogle, logout } from "../firebase";
import loading_gif from "../assets/loading.gif";

// import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loadingButton, setLoadingButton] = useState(false);
    const [msg_login, setMsg_login] = useState("Usuário ou senha inválido");

    const [user, loading, error] = useAuthState(auth);
    // const navigate = useNavigate();

    useEffect(() => {
        if(loading) return;

        // if(user) navigate("/dashboard");

    }, [user, loading]);

    const login = (e) => {
        e.preventDefault();
        try {
            setLoadingButton(true);
            logInWithEmailAndPassword(email, password);
        }
        catch (e) {}
        finally {
            setLoadingButton(false);
        }

    }

    const loginWithGoogle = (e) => {
        e.preventDefault();
        signInWithGoogle();
    }

    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title"> ROLÊ </span>
                        <div className="wrap-input">
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"/>
                        </div>
                        <div className="wrap-input">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Password"/>
                        </div>

                        <label>{msg_login}</label>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn" onClick={login}>
                                {!loadingButton && <>Login</>}
                                {loadingButton && <><img src={loading_gif} alt="loading giff" width={20}/></>}
                            </button>
                        </div>
                        <div className="text-center">
                            <span className="txt1">Não possui conta? </span>
                            <a className="txt2" href="#">Criar conta</a>
                        </div>
                    </form>
                </div>
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    );
}


export default Login;