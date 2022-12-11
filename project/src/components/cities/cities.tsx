import { CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import cn from 'classnames';

type CitiesProps = {
  currentCity: string;
}


function Cities({ currentCity }: CitiesProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city) => {
              const className = cn('locations__item-link tabs__item',
                {
                  'tabs__item--active': currentCity === city
                });
              return (
                <li className="locations__item" key={city}>
                  <a
                    className={className}
                    href="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCityChange(city);
                    }}
                  >
                    <span>{city}</span>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}
export default Cities;
