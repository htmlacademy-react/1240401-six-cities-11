import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import UnexistingPage from '../../pages/page404/page404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

type AppOfferProps = {
  offersCount: number;
}


function App({offersCount}: AppOfferProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          path={AppRoute.Main}
          element={<Main offersCount={offersCount} />}
        </Route>
        <Route>
          path={AppRoute.Login}
          element={<Login />}
        </Route>
        <Route>
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favorites />
            </PrivateRoute>
          }
        </Route>
        <Route>
          path={AppRoute.Room}
          element={<Room />}
        </Route>
        <Route>
          path=`*`
          element={<UnexistingPage />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
