import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  nombre: '',
  apellido: '',
  documento: '',
  email: '',
  authenticate: () => {},
  logout: () => {},
});

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [documento, setDocumento] = useState('');
  const [email, setEmail] = useState('');

  const authenticate = (nombre, apellido, documento, email) => {
    setNombre(nombre);
    setApellido(apellido);
    setDocumento(documento);
    setEmail(email);
  };
  const logout = () => {
    setNombre('');
    setApellido('');
    setDocumento('');
    setEmail('');
  };
  return <Provider value={{ authenticate, logout }}>{children}</Provider>;
};
