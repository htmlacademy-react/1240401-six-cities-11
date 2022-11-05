import { Offer } from '../types/offer';
import Card from './card/card';


type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}:OffersListProps):JSX.Element {

  const [ activeCard, setActivCard ] = useState(0);

  return (
    <>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseOver={() => setActivCard(offer.id)}
        />
      ))}
    </>
  );
}

export default OffersList;
