import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Teams from './Views/Teams/Teams';
import Players from './Views/Players/Players';
import Home from './Views/Home/Home';
function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/teams" exact>
          Teams
        </NavLink>
        <NavLink to="/players" exact>
          Players
        </NavLink>
      </header>
      <Switch>
        <Route component={Home} exact />
        <Route component={Teams} exact />
        <Route component={Players} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
