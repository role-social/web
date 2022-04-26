import React, { useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, getSociais } from '../../firebase';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { addSocial } from '../../firebase';
import Map from './compose/Map';

const AdicionarSocial = () => {
  const [user, loading, error] = useAuthState(auth);

  const [map, setMap] = useState();
  const [social, setSocial] = useState({
    address: '',
    address_name: '',
    cep: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    tema: '',
    descricao: '',
    limite_convidados: '',
    minimo_avaliacao_convidado: '',
    data_hora: '',
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

    const r = await addSocial(social);
    console.log(r);

    alert('Social adicionada com sucesso!');
    setMap(<Map listSociais={listSociais()} />);
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
                  <div className="col-xl-6 d-none d-xl-block">
                    <Input
                      name="address"
                      label="Endereço"
                      size="12"
                      onChange={handleFillFields}
                    />
                    <Input
                      name="address_name"
                      label="Nome do Local"
                      size="12"
                      onChange={handleFillFields}
                    />
                    <Input
                      name="cep"
                      label="CEP"
                      size="12"
                      onChange={handleFillFields}
                      mask={'00000-000'}
                    />
                    <Input
                      name="numero"
                      label="Número"
                      size="12"
                      onChange={handleFillFields}
                    />
                    <Input
                      name="complemento"
                      label="Complemento"
                      size="12"
                      onChange={handleFillFields}
                    />
                    <Input
                      name="bairro"
                      label="Bairro"
                      size="12"
                      onChange={handleFillFields}
                    />
                    <Input
                      name="cidade"
                      label="Estado"
                      size="12"
                      onChange={handleFillFields}
                    />
                  </div>
                  <div className="col-xl-6 d-none d-xl-block">
                    <Input
                      name="tema"
                      label="Tema da social"
                      size="11"
                      onChange={handleFillFields}
                    />
                    <Input
                      onChange={handleFillFields}
                      name="descricao"
                      label="Descrição da social"
                      size="11"
                      type="textarea"
                    />
                    <Input
                      onChange={handleFillFields}
                      name="limite_convidados"
                      label="Limite de convidados"
                      size="11"
                      max={100}
                      type="number"
                    />
                    <Input
                      onChange={handleFillFields}
                      name="minimo_avaliacao_convidado"
                      label="Média de nota dos convidados"
                      size="11"
                      max="5"
                      type="number"
                    />
                    <Input
                      name="data_hora"
                      label="Data e Hora"
                      size="11"
                      type="datetime-local"
                      onChange={handleFillFields}
                    />
                  </div>
                </div>

                <Button
                  name="Adicionar Social"
                  color="warning"
                  onClick={adicionarSocial}
                />
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
