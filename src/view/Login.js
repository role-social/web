import React from 'react';
import {Col, Container, Row, Button, FormControl, InputGroup} from "react-bootstrap";

const Login = () => {
    return(

        <div className={"container"}>

        <div className={"container-login"}>
            <Container style={{width: '20rem'}}>
                <Row >
                    <Col style={{textAlign: 'center'}}><h2>Login</h2></Col>
                </Row>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><i className="far fa-envelope"></i></InputGroup.Text>
                    <FormControl
                        placeholder="Email..."
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><i className="fas fa-lock"></i></InputGroup.Text>
                    <FormControl
                        placeholder="Senha..."
                        aria-label="Senha"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <Row>
                    <Col>
                        <input className="input" type="checkbox" id="mantenha_me_conectado"/>
                        <label htmlFor="mantenha_me_conectado">Mantenha-me conectado</label>
                    </Col>
                </Row>
                <Row>
                    <Button variant="primary">Login</Button>
                </Row>
                <Row>
                    <label>Esqueceu sua senha? <a href="#">Clique aqui</a></label>
                </Row>
                <Row>
                    <div  id="entrar com Facebook">Entrar com Facebook</div>
                </Row>
                <hr/>
                <Row>
                    <label>Não possui uma conta? <a href="#">Cadastre-se!</a></label>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default Login;