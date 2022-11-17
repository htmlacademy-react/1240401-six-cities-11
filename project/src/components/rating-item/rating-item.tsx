
type RatingItemProps = {
  HandlChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  rating: {
      value: number;
      title: string;
    };
}

function RatingItem ({rating, HandlChange}: RatingItemProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating.value}
        id={`${rating.value}-stars`}
        type="radio"
        onChange={HandlChange}
      />
      <label htmlFor={`${rating.value}-stars`}className="reviews__rating-label form__rating-label" title={rating.title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );

}

export default RatingItem;
