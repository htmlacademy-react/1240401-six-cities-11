import { Offer } from '../../types/offers';
import Card from '../card/card';

type OffersNearbyProps = {
  offers: Offer[];
}


function OffersNearby({ offers }: OffersNearbyProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => (
            <Card
              offer={offer}
              key={offer.id}
              cardType={'nearplace'}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default OffersNearby;
