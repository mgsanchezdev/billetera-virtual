import React from 'react';
import { Image } from 'react-bootstrap';
import { Header } from '../Component/Layout/Header';
import fondo from '../asset/image/fondo.jpg';
import './pages.css';

export const Home = () => {
  return (
    <>
      <Header />
      <Image className="imagen_fondo" src={fondo} fluid />
    </>
  );
};
