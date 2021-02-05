import React from 'react';
import { Image } from 'react-bootstrap';
import { HeaderRegister } from '../Component/Layout/HeaderRegister';
import fondo from '../asset/image/fondo.jpg';
import './pages.css';

export const HomeRegistered = () => {
  return (
    <>
      <HeaderRegister />
      <Image className="imagen_fondo" src={fondo} fluid />
    </>
  );
};
