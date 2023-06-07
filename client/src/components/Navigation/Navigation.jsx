import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <Link to='/home' className={styles.navigation}>
       <button className={styles.button}>regresar</button>
    </Link>
  );
};

export default Navigation;