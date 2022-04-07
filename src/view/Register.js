import React from 'react';
import background_register from "../assets/background_register.jpg";
import logo_role from "../assets/logo_role.jpg";
import "./register.css";

function Register() {

    return(
        <div id="register">
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img
                                            src={background_register}
                                            alt="Foto de Jovem se divertindo"
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
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1m"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example1m">Nome</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1n"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example1n">Sobrenome</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example97"
                                                       className="form-control form-control-lg"/>
                                                <label className="form-label" htmlFor="form3Example97">Email</label>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="password" id="form3Example1m1"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example1m1">Senha</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="password" id="form3Example1n1"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example1n1">Confirmação de Senha</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="phone" id="form3Example1m1"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example1m1">Celular</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1n1"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example1n1">Contato de Emergência</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-end pt-3">
                                                <button type="button" className="btn btn-light btn-lg">Limpar
                                                </button>
                                                <button type="button" className="btn btn-warning btn-lg ms-2">Cadastrar
                                                </button>
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
