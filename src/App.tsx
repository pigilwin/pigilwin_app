import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './home/index';

export const App = (): JSX.Element => {

  useEffect(() => {
    
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
