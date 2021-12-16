import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './core/firebase';
import { MainRoutes } from './core/constants/MainRouters';
import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';
import { Start } from './core/components/Start/Start';
import { Main } from './pages/Main/Main';
import { setUser } from './core/redux/actions/auth/user';
import { ThemeProvider } from 'styled-components';
import { theme } from './core/theme';
import { useDispatch } from 'react-redux';
import { RequireAuth } from './core/components/RequireAuth/RequireAuth';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        dispatch(setUser(firebaseUser));
      } else {
        dispatch(setUser(null));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path={MainRoutes.Register} element={<Registration />} />
            <Route path={MainRoutes.Login} element={<Login />} />
            <Route
              path={MainRoutes.Main}
              element={
                <RequireAuth redirectTo={MainRoutes.Login}>
                  <Main />
                </RequireAuth>
              }
            />
            <Route
              path={MainRoutes.Start}
              element={
                <RequireAuth redirectTo={MainRoutes.Login}>
                  <Start />
                </RequireAuth>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
