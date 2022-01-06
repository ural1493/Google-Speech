import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        dispatch(setUser(firebaseUser));
        navigate(MainRoutes.Main);
      } else {
        dispatch(setUser(null));
      }
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path={MainRoutes.Register}
          element={
            <RequireAuth redirectTo={MainRoutes.Start} forAuth>
              <Registration />
            </RequireAuth>
          }
        />
        <Route
          path={MainRoutes.Login}
          element={
            <RequireAuth redirectTo={MainRoutes.Start} forAuth>
              <Login />
            </RequireAuth>
          }
        />
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
    </ThemeProvider>
  );
};

export default App;
