import React, { useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import GoogleMapReact from 'google-map-react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { addSocial } from '../../firebase';

const Principal = () => {
  const [user, loading, error] = useAuthState(auth);
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

    console.log(social);

    if (!user) navigate('/login');
  }, [user, loading, social]);

  const handleFillFields = ({ target }) => {
    setSocial({ ...social, [target.name]: target.value });
  };

  const adicionarSocial = async () => {
    await addSocial(social);
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ width: '30%', backgroundColor: '#f3f3f3' }}>
        <h1>Adicionar social</h1>
        <hr />
        <h2>Endereço</h2>
        <Input
          name="address"
          label="Endereço"
          size="6"
          onChange={handleFillFields}
        />
        <Input
          name="address_name"
          label="Nome do Local"
          size="6"
          onChange={handleFillFields}
        />
        <Input name="cep" label="CEP" size="6" onChange={handleFillFields} />
        <Input
          name="numero"
          label="Número"
          size="6"
          onChange={handleFillFields}
        />
        <Input
          name="complemento"
          label="Complemento"
          size="6"
          onChange={handleFillFields}
        />
        <Input
          name="bairro"
          label="Bairro"
          size="6"
          onChange={handleFillFields}
        />
        <Input
          name="cidade"
          label="Estado"
          size="6"
          onChange={handleFillFields}
        />
        <br />
        <h2>Social</h2>
        <Input
          name="tema"
          label="Tema da social"
          size="6"
          onChange={handleFillFields}
        />
        <Input
          onChange={handleFillFields}
          name="descricao"
          label="Descrição da social"
          size="6"
          type="textarea"
        />
        <Input
          onChange={handleFillFields}
          name="limite_convidados"
          label="Limite de convidados"
          size="6"
          type="number"
        />
        <Input
          onChange={handleFillFields}
          name="minimo_avaliacao_convidado"
          label="Média de nota dos convidados"
          size="6"
          max="5"
          type="number"
        />
        <Input
          name="data_hora"
          label="Data e Hora"
          size="6"
          onChange={handleFillFields}
        />

        <Button
          name="Adicionar Social"
          color="warning"
          onClick={adicionarSocial}
        />
      </div>
      <div style={{ width: '70%' }}>Google maps</div>
    </div>
  );
};

export default Principal;
