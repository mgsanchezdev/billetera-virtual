import Routes from './Routes/Routes';
//Aca importaria el provaider donde se encontraria el usario logueado para poder utilizarlo
//en todo el sistema, utilizaria context para implementar esa funcionalidad.
// import {AuthProvider} from './context/Auth
function App() {
  return (
    <>
      {/*<AuthProvider> */}
      <Routes />
      {/*</AuthProvider> */}
    </>
  );
}

export default App;
