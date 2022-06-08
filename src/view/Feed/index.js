import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import { StatefulTooltip } from 'baseui/tooltip';
import { Button, KIND, SHAPE } from 'baseui/button';
import { Select } from 'baseui/select';
import { FormControl } from 'baseui/form-control';
import { PLACEMENT, Toast, toaster, ToasterContainer } from 'baseui/toast';
import { Card as CardBaseUi, StyledBody, StyledAction } from 'baseui/card';
import {
  addParticipante,
  updateQtdeAtualSocial,
  auth,
  getSociais,
  getSociaisInscritas,
} from '../../firebase';
import participante from './compose/PARTICIPANTE.js';
import 'react-toastify/dist/ReactToastify.css';
import CardHeader from 'react-bootstrap/esm/CardHeader';

function Feed() {
  const [user, loading, error] = useAuthState(auth);
  const [sociais, setSociais] = useState([]);
  const [inscricoes, setInscricoes] = useState([]);
  const [temaFiltro, setTemaFiltro] = useState('');

  const loadSociais = async () => setSociais(await getSociais());
  const loadSociaisInscritas = async (uid_user) =>
    setInscricoes(await getSociaisInscritas(uid_user));

  useEffect(() => {
    if (loading) return;

    loadSociais();
    loadSociaisInscritas(user.uid);
  }, [loading, user]);

  const inscreverse = async ({ key }) => {
    participante.social = key;
    participante.usuario = user.uid;

    await addParticipante(participante);
    await updateQtdeAtualSocial(key);

    console.log('Participante adicionado com sucesso!');
    loadSociais();
    loadSociaisInscritas(user.uid);

    toast.success('Inscrição realizada com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

    // TODO utilizar o toast do UBER
    // toaster.positive('aopa');
  };

  const checkIsInscrito = (id_social) => inscricoes.includes(id_social);

  const searchSociais = async () => {
    const sociaisList = await getSociais(temaFiltro[0]?.id);
    setSociais(sociaisList);
  };

  return (
    <>
      <br />
      <Container>
        <FormControl>
          <Row>
            <Col md={11}>
              <Select
                options={[
                  { label: 'Churrasco', id: 'Churrasco' },
                  { label: 'Funk', id: 'Funk' },
                  { label: 'Sertanejo', id: 'Sertanejo' },
                  { label: 'RPG', id: 'Rpg' },
                ]}
                value={temaFiltro}
                placeholder="Tema da Social"
                onChange={(option) => setTemaFiltro(option.value)}
              />
            </Col>
            <Col md={1}>
              <Button shape={SHAPE.pill} onClick={() => searchSociais()}>
                Buscar
              </Button>
            </Col>
          </Row>
        </FormControl>
      </Container>
      <br />
      <Container>
        <ToastContainer />
        <ToasterContainer placement={PLACEMENT.topRight} />
        {sociais.map((role, key) => {
          return (
            <Row key={key}>
              <Col>
                <center>
                  <Card>
                    <Card.Img variant="top" src={role.img} />
                    <Card.Body>
                      <Card.Title>
                        {role.titulo} | {role.tema}
                      </Card.Title>
                      <Card.Text>
                        {role.descricao}
                        <br />
                        <small>
                          {role.quantidade_atual}/{role.quantidade_max}
                        </small>
                      </Card.Text>
                      {checkIsInscrito(role.key) ? (
                        <Button shape={SHAPE.pill} kind={KIND.tertiary}>
                          Inscrito
                        </Button>
                      ) : (
                        <StatefulTooltip
                          content={() =>
                            role.quantidade_atual >= role.quantidade_max
                              ? 'Limite da social atingido!'
                              : ''
                          }
                          showArrow
                          popoverMargin={6}
                          autoFocus
                        >
                          <Button
                            variant="primary"
                            onClick={() => inscreverse(role)}
                            disabled={
                              role.quantidade_atual >= role.quantidade_max
                            }
                          >
                            Inscrever-se
                          </Button>
                        </StatefulTooltip>
                      )}
                    </Card.Body>
                  </Card>
                </center>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}

export default Feed;
