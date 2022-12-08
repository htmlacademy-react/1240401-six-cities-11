import { CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';


function Cities() {

  const dispatch = useAppDispatch();

  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city) => (
              <li className="locations__item" key={city}>
                <a
                  className="locations__item-link tabs__item"
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCityChange(city);
                  }}
                >
                  <span>{city}</span>
                </a>
              </li>
            ))
          };
        </ul>
      </section>
    </div>
  );
}
export default Cities;
