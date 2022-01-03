import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/players">Players</NavLink>
      </header>
      <Switch>
        <Route></Route>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
