import React from 'react';
import { HeaderComponent } from '../Component/Layout/HeaderComponent';
import './pages.css';

export const Saldo = () => {
  return (
    <>
      <HeaderComponent />
      <h1 className="header_saldo">Su saldo en la cuenta es de $ 1000 </h1>
    </>
  );
};
