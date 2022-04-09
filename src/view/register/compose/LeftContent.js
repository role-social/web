import React from 'react';

import Image from 'next/image';
import background_register from '../../../assets/images/background_register.jpg';
import style from '../style.module.css';

function LeftContent() {
  return (
    <>
      <Image
        src={background_register}
        alt="Foto de Jovem se divertindo"
        className="img-fluid img-background-register"
      />
    </>
  );
}

export default LeftContent;
