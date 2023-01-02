import { Offer } from '../../types/offers';
import Card from '../card/card';


type CardsListProps = {
  offers: Offer[];
  onMouseEnter?: (activeCard: number | null) => void;
}

export function CardsList({offers, onMouseEnter}: CardsListProps):JSX.Element {
  return (
    <div className="cities__places-list">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseEnter={() => onMouseEnter && onMouseEnter(offer.id)}
          onMouseLeave={() => onMouseEnter && onMouseEnter(null)}
          cardType={'city'}
        />
      ))}
    </div>
  );
}
