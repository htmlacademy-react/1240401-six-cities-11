import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offers';
import { CardsList } from '../../components/cards-list/cards-list';
import Cities from '../../components/cities/cities';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import Header from '../../components/header/header';

type MainProps = {
  offersCount: number;
  offers: Offer[];
}

function Main({ offersCount, offers}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>
          6 cities - Main
        </title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Cities />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>

              <Sorting />

              <CardsList offers={offers} />
            </section>

            <div className="cities__right-section">
              <Map
                className="cities__map"
                city={offers[0].city}
                points={offers}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
