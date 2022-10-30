import styles from './page404.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Page404():JSX.Element {
  return (
    <section className={styles.section}>
      <div>
        <h1 className={styles.h1}>Ошибка 404</h1>
        <p className={styles.p}>Страница не найдена!</p>
        <Link to={AppRoute.Main} className={styles.link}>Перейти на главную страницу</Link>
      </div>
    </section>
  );
}

export default Page404;

