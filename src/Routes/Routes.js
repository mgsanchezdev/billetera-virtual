import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login/Login';
import { HomeRegistered } from '../Pages/HomeRegistered';
import Register from '../Pages/Register';
import { Dinero } from '../Pages/Dinero';
import { Compra } from '../Pages/Compra';
import { Saldo } from '../Pages/Saldo';

const Routes = () => {
  // En el ROUTER se deberia implementar un sistema de rutas publicas y privadas
  //dependiendo si el usuario esta logueado o no
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dinero" exact component={Dinero} />
        <Route path="/compra" exact component={Compra} />
        <Route path="/saldo" exact component={Saldo} />
        <Route path="/home" exact component={HomeRegistered} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
export default Routes;
