import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Teams from './Views/Teams/Teams';
import Players from './Views/Players/Players';
import Home from './Views/Home/Home';
import TeamDetail from './Views/TeamDetail/TeamDetail';
function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/teams" exact>
          Teams
        </NavLink>
        <NavLink to="/players" exact>
          Players
        </NavLink>
      </header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/teams/:id" component={TeamDetail} exact />
        <Route path="/teams" component={Teams} exact />
        <Route path="/players" component={Players} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
