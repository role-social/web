import React, { useEffect, useRef, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, getSociais } from '../../firebase';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { addSocial } from '../../firebase';
import Map from './compose/Map';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import LeftPannel from '../../components/LeftPannel/LeftPannel';

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

  const ref = useRef();

  useEffect(() => {
    if (loading) return;

    if (!user) navigate('/login');

    setMap(<Map listSociais={listSociais()} />);
  }, [user, loading]);

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

    const rAddSocail = await addSocial(social);
    if (rAddSocail === 'Error: cep') return;

    var r = await listSociais();
    setMap(<Map listSociais={r} />);

    alert('Social Adicionada com sucesso!');

    ref.current.submit();
  };

  const filterSociais = async () => {
    var r = await listSociais();        
    var getTema = r.map(data => data.tema)   
    setMap(<Map listSociais={r} tema={getTema[0]} />);    
  };

  const listSociais = async () => {
    return await getSociais(social.tema);
  };

  const style_pannel_add = {
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 56px)',
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={3} style={style_pannel_add}>
          <br />
          <h2>| Adicionar social</h2>

          <Form ref={ref}>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                placeholder="Título da Social"
                name="titulo"
                onChange={handleFillFields}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tema da Social</Form.Label>
              <Form.Select size="mb" name="tema" onChange={handleFillFields}>
                <option value="">-- SELECIONE --</option>
                <option value="Funk">Funk</option>
                <option value="Sertanejo">Sertanejo</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantidade de pessoas limite</Form.Label>
              <Form.Control
                name="quantidade"
                type="number"
                onChange={handleFillFields}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Descreva resumidamente sobre o que será o Rolê"
                name="descricao"
                onChange={handleFillFields}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rua</Form.Label>
              <Form.Control name="rua" onChange={handleFillFields} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>CEP</Form.Label>
                <Form.Control name="cep" onChange={handleFillFields} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Complemento</Form.Label>
                <Form.Control name="complemento" onChange={handleFillFields} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Número</Form.Label>
                <Form.Control name="numero" onChange={handleFillFields} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Data</Form.Label>
                <Form.Control
                  type="date"
                  name="data"
                  onChange={handleFillFields}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Início</Form.Label>
                <Form.Control
                  type="time"
                  name="horario_inicio"
                  onChange={handleFillFields}
                />
              </Form.Group>

              <Form.Group as={Col}>
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
              <Form.Select name="modo_contribuicao" onChange={handleFillFields}>
                <option value={''}>-- SELECIONE --</option>
                <option>Dinheiro</option>
                <option>Levando Bebida ou Comida</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contato do Organizador</Form.Label>
              <Form.Control
                type="phone"
                name="contato_organizador"
                onChange={handleFillFields}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Button
                    name="Cadastrar"
                    color="warning"
                    onClick={() => adicionarSocial()}
                  />
                </Col>
                <Col>
                  <Button
                    name="Filtrar"
                    color="warning"
                    onClick={() => filterSociais()}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
        <Col lg={9}>{map}</Col>
      </Row>
      <Row>
        <Col>
          <LeftPannel />
        </Col>
      </Row>
    </Container>
  );
};

export default AdicionarSocial;
