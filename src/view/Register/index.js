import React, { useEffect, useState } from 'react';
import background_register from '../../assets/images/background_register.jpg';
import logo_role from '../../assets/images/logo_role.jpg';
import { Button } from '../../components/Button/Button';
import './style.css';
import { Input } from '../../components/Input/Input';
import { registerWithEmailAndPassword } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [msgConfirmPassword, setMsgConfirmPassword] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState(true);
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

  useEffect(() => {
    if (isPasswordValid) setMsgConfirmPassword('');
    else setMsgConfirmPassword('Senhas Divergentes');
  }, [isPasswordValid]);

  const handleFields = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const confirmPassword = ({ target }) => {
    if (target.value != user.password) setIsPasswordValid(false);
    else setIsPasswordValid(true);
  };

  const register = async () => {
    const thereIsValueEmpty = Object.values(user).some(
      (val) => val === null || val === '',
    );
    console.log(user);
    if (thereIsValueEmpty) {
      alert('Preencha todos os campos');
      return;
    }

    const r = await registerWithEmailAndPassword(user);

    if(r?.code) {
      let msg = "";
      console.log(r.code);
      switch (r.code) {
        case "auth/email-already-in-use":
          msg = "Email já cadastrado! informe outro!";
          break;
        case "auth/invalid-email":
          msg = "Email inválido! informe outro!";
          break;
        case "auth/operation-not-allowed":
          msg = "Email existente mas inabilitado";
          break;
        case "auth/weak-password":
          msg = "Informe uma senha mais forte!";
          break;
        default:
          msg = "Ops! algo deu errado, tente novamente mais tarde!";
          break;
      }
      alert(msg);
      return;
    }
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
                          required={true}
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
                          onChange={(e) => {
                            handleFields(e);
                            confirmPassword(e);
                          }}
                          msgError={msgConfirmPassword}
                        />
                      </div>

                      <div className="row">
                        <Input
                          name="phone"
                          label="Celular"
                          size="6"
                          mask="(00) 0 0000-0000"
                          onChange={handleFields}
                        />
                        <Input
                          name="emergencialPhone"
                          label="Contato de Emergência"
                          size="6"
                          mask="(00) 0 0000-0000"
                          onChange={handleFields}
                        />
                      </div>

                      <div className="d-flex justify-content-end pt-3 gap-2">
                        <Button
                          name="Cadastrar"
                          color="warning"
                          disabled={!isPasswordValid}
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
