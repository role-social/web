import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Login = () => {
    return(
        <>
            <Container style={{width: '20rem'}}>
                <Row>
                    <Col style={{textAlign: 'center'}}><h2>Login</h2></Col>
                </Row>
                <Row>
                    <input type="email" placeholder="Email..."/>
                </Row>
                <Row>
                    <input type="password" placeholder="Senha..."/>
                </Row>
                <Row>
                    <Col>
                        <input type="checkbox" id="mantenha_me_conectado"/>
                    </Col>
                    <Col>
                        <label htmlFor="mantenha_me_conectado">Mantenha-me conectado</label>
                    </Col>
                </Row>
                <Row>
                    <button>Login</button>
                </Row>
                <Row>
                    <label>Esqueceu sua senha? <a href="#">Clique aqui</a></label>
                </Row>
                <Row>
                    <div id="entrar com Facebook">Entrar com Facebook</div>
                </Row>
                <hr/>
                <Row>
                    <label>Não poossui uma conta? <a href="#">Cadastre-se!</a></label>
                </Row>
            </Container>
        </>
    )
}

export default Login;