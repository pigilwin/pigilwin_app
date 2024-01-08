import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Theme } from './components/theme';
import { setTheme, themeStateSelector } from './store/theme/themeSlice';
import { Home } from './Home';


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
      "bg-gray-100",
      "dark:bg-gray-700"
  ];

  if (usingDarkMode) {
    rootElement.classList.add("dark");
  } else {
    rootElement.classList.remove("dark");
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);

  return (
    <main className={classNames.join(" ")}>
      <RouterProvider router={router}/>
      <Theme/>
    </main>
  );
};
