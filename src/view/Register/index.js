import React, { useEffect, useState } from 'react';
import background_register from '../../assets/images/background_register.jpg';
import logo_role from '../../assets/images/logo_role.jpg';
import { Button } from '../../components/Button/Button';
import './style.css';
import { Input } from '../../components/Input/Input';
import { registerWithEmailAndPassword } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    emergencialPhone: '',
  });

  const navigate = useNavigate();

  const handleFields = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const register = async () => {
    await registerWithEmailAndPassword(user);
    navigate('/');
  };

  return (
    <div className="bg-dark full-screen" id="register">
      <section>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src={background_register}
                      alt="Mulher jovem de cabelo azul e camiseta amarela com um headfone pendurado no pescoço"
                      className="img-fluid img-background-register"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        <img
                          src={logo_role}
                          alt="Logo Role"
                          className="logo-title"
                        />
                        <label htmlFor="">Cadastrar-se</label>
                      </h3>

                      <div className="row">
                        <Input
                          name="name"
                          label="Nome"
                          size="6"
                          onChange={handleFields}
                        />
                        <Input
                          name="lastName"
                          label="Sobrenome"
                          size="6"
                          onChange={handleFields}
                        />
                      </div>

                      <Input
                        name="email"
                        label="E-mail"
                        size="12"
                        onChange={handleFields}
                      />

                      <div className="row">
                        <Input
                          type="password"
                          name="password"
                          label="Senha"
                          size="6"
                          onChange={handleFields}
                        />
                        <Input
                          type="password"
                          name="confirmPassword"
                          label="Confirmação de Senha"
                          size="6"
                          onChange={handleFields}
                        />
                      </div>

                      <div className="row">
                        <Input
                          name="phone"
                          label="Celular"
                          size="6"
                          onChange={handleFields}
                        />
                        <Input
                          name="emergencialPhone"
                          label="Contato de Emergência"
                          size="6"
                          onChange={handleFields}
                        />
                      </div>

                      <div className="d-flex justify-content-end pt-3 gap-2">
                        <Button
                          name="Cadastrar"
                          color="warning"
                          onClick={() => register()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
