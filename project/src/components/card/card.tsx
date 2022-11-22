import { Link } from 'react-router-dom';
import { MAX_RATING } from '../../const';
import { Offer } from '../../types/offers';
import Button from '../button/button';

type CardProps = {
  offer: Offer;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  cardType: 'city' | 'favorites';
}

const cardsClasses = {
  city: {
    article: 'cities__card place-card',
    image: 'cities__image-wrapper place-card__image-wrapper',
    cardInfo: 'place-card__info'
  },

  favorites: {
    article: 'favorites__card place-card',
    image: 'favorites__image-wrapper place-card__image-wrapper',
    cardInfo: 'favorites__card-info place-card__info'
  }
};

function Card({ offer, onMouseOver, onMouseLeave, cardType }: CardProps) {
  const { price, rating, type, previewImage, isPremium, title } = offer;
  const ratingCount = (rating * 100) / MAX_RATING;
  const typeCapitalizeChar = type[0].toUpperCase() + type.substring(1);
  const { article, image, cardInfo } = cardsClasses[cardType];

  return (
    <article
      className={article}
      onMouseOver={() => onMouseOver?.()}
      onMouseLeave={() => onMouseLeave?.()}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={image}>
        <Link to="/#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className={cardInfo}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Button />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingCount}%` }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/#">{title}</Link>
        </h2>
        <p className="place-card__type">{typeCapitalizeChar}</p>
      </div>
    </article>
  );
}

export default Card;
