import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './home/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
