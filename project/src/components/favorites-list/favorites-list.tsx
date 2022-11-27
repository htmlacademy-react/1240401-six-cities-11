import { Offer } from '../../types/offers';
import Card from '../card/card';

type FavoritesListProps = {
  offers: Offer[];
}

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  const cities = Array.from(new Set(offers.map((offer) => offer.city.name)));

  return (
    <ul className="favorites__list">

      {cities.map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers.map((offer: Offer) => {
              if (offer.city.name === city) {
                return (
                  <Card
                    key={offer.id}
                    offer={offer}
                    cardType={'favorites'}
                  />
                );
              }
              return null;
            })}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
