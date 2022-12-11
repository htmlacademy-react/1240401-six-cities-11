import { Helmet } from 'react-helmet-async';
import { CardsList } from '../../components/cards-list/cards-list';
import Cities from '../../components/cities/cities';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';

function Main(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity);


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

        <Cities currentCity={currentCity}/>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>

              <Sorting />

              <CardsList offers={filteredOffers} />
            </section>

            <div className="cities__right-section">
              <Map
                className="cities__map"
                city={filteredOffers[0].city}
                points={filteredOffers}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
