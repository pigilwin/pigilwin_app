import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Blog } from './blog';
import { ViewPost } from './blog/ViewPost';
import { Home } from './home/index';
import { Theme } from './components/theme';
import { setTheme, themeStateSelector } from './store/theme/themeSlice';

export const App = (): JSX.Element => {

  const dispatch = useDispatch();
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      dispatch(setTheme(true));
    }
  }, [dispatch]);

  const usingDarkMode = useSelector(themeStateSelector);
  const rootElement = window.document.documentElement;
  const classNames: string[] = [
      "font-sans",
      "antialiased",
      "leading-normal",
      "tracking-wider",
      "dark:bg-gray-700"
  ];

  if (usingDarkMode) {
      rootElement.classList.add("dark");
  } else {
    rootElement.classList.remove("dark");
  }

  return (
    <main className={classNames.join(" ")}>
      <BrowserRouter>
        <Switch>
          <Route path="/blog/:id">
            <ViewPost/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
      <Theme/>
    </main>
  );
};
