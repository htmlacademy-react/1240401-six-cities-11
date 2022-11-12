import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MAX_RATING } from '../../const';
import { Offer } from '../../types/offers';
import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';

type FavoritesProps = {
  offers: Offer;
}

function Favorites({offers}: FavoritesProps): JSX.Element {

  const ratingCount = (offers.rating * 100) / MAX_RATING;
  return (
    <div className="page">
      <Helmet>
        <title>
          6 cities: Favorites
        </title>
      </Helmet>
      {/* <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo type="header"/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header> */}

      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="/#">
                      <span>{offers.title}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  <article className="favorites__card place-card">
                    {offers.isPremium && (
                      <div className="place-card__mark">
                        <span>Premium</span>
                      </div>
                    )}
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <Link to="/#">
                        <img className="place-card__image" src={offers.previewImage} width="150" height="110" alt="Place"/>
                      </Link>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{offers.price}</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: `${ratingCount}%`}}></span>
                          <span className="visually-hidden">{offers.rating}</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link to="/#">{offers.description}</Link>
                      </h2>
                      <p className="place-card__type">{offers.type}</p>
                    </div>
                  </article>

                  <article className="favorites__card place-card">
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <Link to="/#">
                        <img className="place-card__image" src={offers.previewImage} width="150" height="110" alt="Place"/>
                      </Link>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{offers.price}</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: `${ratingCount}%`}}></span>
                          <span className="visually-hidden">{offers.rating}</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link to="/#">{offers.description}</Link>
                      </h2>
                      <p className="place-card__type">{offers.type}</p>
                    </div>
                  </article>
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="/#">
                      <span>{offers.title}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  <article className="favorites__card place-card">
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <Link to="/#">
                        <img className="place-card__image" src={offers.previewImage} width="150" height="110" alt="Place"/>
                      </Link>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{offers.price}</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: `${ratingCount}%`}}></span>
                          <span className="visually-hidden">{offers.rating}</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link to="/#">{offers.description}</Link>
                      </h2>
                      <p className="place-card__type">{offers.type}</p>
                    </div>
                  </article>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">

        <Logo type="footer"/>

      </footer>
    </div>

  );
}
export default Favorites;
