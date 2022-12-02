import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { ReviewType } from '../../types/review-type';
import Map from '../../components/map/map';
import OffersNearby from '../../components/offers-nearby/offers-nearby';
import { Offer, City } from '../../types/offers';
import RatingForm from '../../components/rating-form/rating-form';
import RoomGallery from '../../components/room-gallery/room-gallery';
import RoomHost from '../../components/room-host/room-host';

type RoomProps = {
  reviews: ReviewType[];
  offers: Offer[];
  city: City;
}

function Room({ reviews, offers, city }: RoomProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>
          6 cities: Property
        </title>
      </Helmet>

      <Header />

      <main className="page__main page__main--property">
        <section className="property">

          <RoomGallery />

          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  Apartment
                </li>
                <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">
                    Wi-Fi
                  </li>
                  <li className="property__inside-item">
                    Washing machine
                  </li>
                  <li className="property__inside-item">
                    Towels
                  </li>
                  <li className="property__inside-item">
                    Heating
                  </li>
                  <li className="property__inside-item">
                    Coffee machine
                  </li>
                  <li className="property__inside-item">
                    Baby seat
                  </li>
                  <li className="property__inside-item">
                    Kitchen
                  </li>
                  <li className="property__inside-item">
                    Dishwasher
                  </li>
                  <li className="property__inside-item">
                    Cabel TV
                  </li>
                  <li className="property__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>

              <RoomHost />

              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews} />

                <RatingForm />

              </section>
            </div>
          </div>

          <Map className="property__map" city={city} points={offers} />

        </section>

        <OffersNearby
          offers={offers}
        />

      </main>
    </div>
  );
}
export default Room;
