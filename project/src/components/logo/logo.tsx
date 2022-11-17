import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


type LogoProps = {
  type: 'header' | 'footer';
}

const sizes = {
  header: {
    width: 81,
    height: 41
  },
  footer: {
    width: 64,
    height: 33
  }
};

function Logo({ type }: LogoProps): JSX.Element {
  const imgSize = sizes[type];

  return (
    <Link className={`${type}__logo-link`} to={AppRoute.Main}>
      <img className={`${type}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={imgSize.width}
        height={imgSize.height}
      />
    </Link>

  );

}

export default Logo;
