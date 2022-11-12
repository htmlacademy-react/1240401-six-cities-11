import { useState } from 'react';
import { Offer } from '../../types/offers';
import Card from '../card/card';


type CardsListProps = {
  offers: Offer[];
}

export function CardsList({offers}: CardsListProps):JSX.Element {
  const [, setActiveCard] = useState<number | null>(null);

  return (
    <div className="cities__places-list">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseOver={() => setActiveCard(offer.id)}
          onMouseLeave={() => setActiveCard(null)}
        />
      ))}
    </div>
  );
}
