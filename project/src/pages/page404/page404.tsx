import styles from './page404.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';

function Page404():JSX.Element {
  return (
    <>
      <Helmet>
        <title>
          6 cities: 404 error
        </title>
      </Helmet>
      <section className={styles.section}>
        <div>
          <h1 className={styles.title}>Ошибка 404</h1>
          <p className={styles.text}>Страница не найдена!</p>
          <Link to={AppRoute.Main} className={styles.link}>Перейти на главную страницу</Link>
        </div>
      </section>
    </>
  );
}

export default Page404;

