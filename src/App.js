
import NotFound from './Pages/NotFound/NotFound';

import { Route, Switch } from 'react-router-dom'
import { routes } from './routes/routes';

import './App.css';

function App() {
  return (
    <Switch>
      {routes.map(({path, Components}) => <Route path={path} exact component={Components} />)}
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
