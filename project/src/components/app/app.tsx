import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
// import Favorites from '../../pages/favorites/favorites';
// import Room from '../../pages/room/room';
import Page404 from '../../pages/page404/page404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
// import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

function App(): JSX.Element{
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          {/* <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Room}
            element={<Room reviews={reviews} offers={offers} city={city} />}
          /> */}
          <Route
            path="*"
            element={<Page404 />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
export default App;
