import React from 'react';
import background_register from '../../assets/images/background_register.jpg';
import logo_role from '../../assets/images/logo_role.jpg';
import { Button } from '../../components/Button/Button';
import './style.css';
import { Input } from '../../components/Input/Input';

function Register() {
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
                        <Input name="Nome" size="6" />
                        <Input name="Sobrenome" size="6" />
                      </div>

                      <Input name="E-mail" size="12" />

                      <div className="row">
                        <Input name="Senha" size="6" />
                        <Input name="Confirmação de Senha" size="6" />
                      </div>

                      <div className="row">
                        <Input name="Celular" size="6" />
                        <Input name="Contato de Emergência" size="6" />
                      </div>

                      <div className="d-flex justify-content-end pt-3 gap-2">
                        <Button name="Limpar" color="light" />
                        <Button name="Cadastrar" color="warning" />
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
