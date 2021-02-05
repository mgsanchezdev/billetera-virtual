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

const Routes = () => {
  // En el ROUTER se deberia implementar un sistema de rutas publicas y privadas
  //dependiendo si el usuario esta logueado o no
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={HomeRegistered} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
export default Routes;
