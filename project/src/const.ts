export enum AppRoute {
  Main = '/',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Login = '/login',
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAX_RATING = 5;
