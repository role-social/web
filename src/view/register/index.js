import React from 'react';

// import './style.css';

import Header from './compose/Header';
import Inputs from './compose/Inputs';
import LeftContent from './compose/LeftContent';

function Index() {
  // TODO componentizar tudo aqui

  return (
    <div id="register">
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <LeftContent />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <Header />
                      <Inputs />
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

export default Index;
