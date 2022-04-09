import React from 'react';

import Image from 'next/image';
import logo_role from '../../../assets/images/logo_role.jpg';
import style from '../style.module.css';

function Header() {
  return (
    <>
      <h3 className="mb-5 text-uppercase">
        <div className={style.header}>
          <div className={style.logo_title}>
            <Image
              src={logo_role}
              alt="Logo Role Social"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <label htmlFor="">Cadastrar-se</label>
        </div>
      </h3>
    </>
  );
}

export default Header;
