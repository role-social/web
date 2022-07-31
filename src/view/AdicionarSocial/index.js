import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { addSocial, auth } from '../../firebase';
import Map from './compose/Map';

const AdicionarSocial = () => {
  const [user, loading] = useAuthState(auth);
  const current = new Date(); // traz a data atual
  const getPropertyDay =
    (current.getDate() < 10 ? '0' : '') + current.getDate(); // adiciona um 0 na frente da data caso a mesma possua apenas um dígito
  const getPropertyMonth =
    (current.getMonth() < 10 ? '0' : '') + (current.getMonth() + 1); // adicionar um 0 na frente no mês caso o mesmo possua apenas um dígito
  const getFormattedCurrentDate = `${current.getFullYear()}-${getPropertyMonth}-${getPropertyDay}`; // concatena ano-mês-dia
  const [map, setMap] = useState();
  const [social, setSocial] = useState({
    titulo: '',
    tema: '',
    descricao: '',
    quantidade_max: '',
    quantidade_atual: 0,
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

    setMap(<Map />);
  }, [user, loading]);

  const handleFillFields = ({ target }) => {
    setSocial({ ...social, [target.name]: target.value });
  };

  const adicionarSocial = async () => {
    const thereIsValueEmpty = Object.values(social).some(
      (val) => val === null || val === ''
    );

    if (thereIsValueEmpty) {
      alert('Preencha todos os campos para adicionar a social');
      return;
    }

    const rAddSocail = await addSocial(social);
    if (rAddSocail === 'Error: cep') return;

    setMap(<Map />);

    alert('Social Adicionada com sucesso!');

    ref.current.submit();
  };

  const filterSociais = async () => {
    setMap(<Map tema={social.tema} />);
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
                name="quantidade_max"
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
              <Form.Group controlId="date" as={Col}>
                <Form.Label>Data</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  onChange={handleFillFields}
                  min={getFormattedCurrentDate}
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
      {/* <Row>
        <Col>
          <LeftPannel />
        </Col>
      </Row> */}
    </Container>
  );
};

export default AdicionarSocial;
