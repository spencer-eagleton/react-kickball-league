import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Teams from './Views/Teams/Teams';
import Players from './Views/Players/Players';
import Home from './Views/Home/Home';
function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/players">Players</NavLink>
      </header>
      <Switch>
        <Route component={Home} exact />
        <Route component={Teams} />
        <Route component={Players} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
