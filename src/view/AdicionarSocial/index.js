import React, { useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, getSociais } from '../../firebase';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { addSocial } from '../../firebase';
import Map from './compose/Map';
import { Col, Form, Row } from 'react-bootstrap';

const AdicionarSocial = () => {
  const [user, loading, error] = useAuthState(auth);

  const [map, setMap] = useState();
  const [social, setSocial] = useState({
    titulo: '',
    tema: '',
    descricao: '',
    quantidade: '',
    rua: '',
    cep: '',
    complemento: '',
    numero: '',
    data: '',
    horario_inicio: '',
    horario_encerramento: '',
    modo_contribuicao: [],
    contato_organizador: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (!user) navigate('/login');

    setMap(<Map listSociais={listSociais()} />);
  }, [user, loading, social]);

  const handleFillFields = ({ target }) => {
    setSocial({ ...social, [target.name]: target.value });
  };

  const adicionarSocial = async () => {
    const thereIsValueEmpty = Object.values(social).some(
      (val) => val === null || val === '',
    );

    if (thereIsValueEmpty) {
      alert('Preencha todos os campos para adicionar a social');
      return;
    }

    addSocial(social);

    setTimeout(() => {
      alert('Social adicionada com sucesso!');
      setMap(<Map listSociais={listSociais()} />);
    }, 3000);
  };

  const listSociais = async () => {
    return await getSociais();
  };

  return (
    <div style={{ display: 'flex', height: 'calc(100% -100px)' }}>
      <div style={{ width: '30%', backgroundColor: '#f3f3f3' }}>
        <section>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <h2>Adicionar social</h2>
                <hr />
                <div className="row">
                  <div className="col-xl-12 d-none d-xl-block">
                    <Form>
                      <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                          placeholder="Título da Social"
                          name="titulo"
                          onChange={handleFillFields}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Tema da Social</Form.Label>
                        <Form.Control
                          placeholder="Ex.: Sertanjo, Funk, Eletrônica"
                          name="tema"
                          onChange={handleFillFields}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Quantidade de pessoas limite</Form.Label>
                        <Form.Control
                          name="quantidade"
                          type="number"
                          onChange={handleFillFields}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Descreva resumidamente sobre o que será o Rolê"
                          name="descricao"
                          onChange={handleFillFields}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Rua</Form.Label>
                        <Form.Control name="rua" onChange={handleFillFields} />
                      </Form.Group>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>CEP</Form.Label>
                          <Form.Control
                            name="cep"
                            onChange={handleFillFields}
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>Complemento</Form.Label>
                          <Form.Control
                            name="complemento"
                            onChange={handleFillFields}
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>Número</Form.Label>
                          <Form.Control
                            name="numero"
                            onChange={handleFillFields}
                          />
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>Data</Form.Label>
                          <Form.Control
                            type="date"
                            name="data"
                            onChange={handleFillFields}
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>Início</Form.Label>
                          <Form.Control
                            type="time"
                            name="horario_inicio"
                            onChange={handleFillFields}
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>Encerramento</Form.Label>
                          <Form.Control
                            type="time"
                            name="horario_encerramento"
                            onChange={handleFillFields}
                          />
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>Método de Contribuição</Form.Label>
                        <Form.Select
                          name="modo_contribuicao"
                          onChange={handleFillFields}
                        >
                          <option value={''}>-- SELECIONE --</option>
                          <option>Dinheiro</option>
                          <option>Levando Bebida ou Comida</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Contato do Organizador</Form.Label>
                        <Form.Control
                          type="phone"
                          name="contato_organizador"
                          onChange={handleFillFields}
                        />
                      </Form.Group>

                      <br />
                      <Form.Group as={Col} controlId="formGridCity">
                        <Button
                          name="Cadastrar"
                          color="warning"
                          onClick={() => adicionarSocial()}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ width: '70%' }}>{map}</div>
    </div>
  );
};

export default AdicionarSocial;
