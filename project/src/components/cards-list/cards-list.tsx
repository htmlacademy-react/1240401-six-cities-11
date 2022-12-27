import { useState } from 'react';
import { Offer } from '../../types/offers';
import Card from '../card/card';


type CardsListProps = {
  offers: Offer[];
  onMouseEnter?: (activeCard: number | null) => void;
}

export function CardsList({offers, onMouseEnter}: CardsListProps):JSX.Element {
  const [, setActiveCard] = useState<number | null>(null);

  return (
    <div className="cities__places-list">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveCard(offer.id)}
          onMouseLeave={() => setActiveCard(null)}
          cardType={'city'}
        />
      ))}
    </div>
  );
}
