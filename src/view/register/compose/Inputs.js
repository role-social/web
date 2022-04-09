import React from 'react';

const Inputs = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <input
              type="text"
              id="form3Example1m"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form3Example1m">
              Nome
            </label>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <input
              type="text"
              id="form3Example1n"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form3Example1n">
              Sobrenome
            </label>
          </div>
        </div>
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
        />
        <label className="form-label" htmlFor="form3Example97">
          Email
        </label>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <input
              type="password"
              id="form3Example1m1"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form3Example1m1">
              Senha
            </label>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <input
              type="password"
              id="form3Example1n1"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form3Example1n1">
              Confirmação de Senha
            </label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <input
              type="phone"
              id="form3Example1m1"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form3Example1m1">
              Celular
            </label>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <input
              type="text"
              id="form3Example1n1"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form3Example1n1">
              Contato de Emergência
            </label>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end pt-3">
        <button type="button" className="btn btn-light btn-lg">
          Limpar
        </button>
        <button type="button" className="btn btn-warning btn-lg ms-2">
          Cadastrar
        </button>
      </div>
    </>
  );
};

export default Inputs;
