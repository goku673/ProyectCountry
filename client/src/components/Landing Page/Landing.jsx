import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.container}>
      <img src={require('./countries.png')} alt='bandera' className={styles['background-image']} />
        
      <div>
        <Link to='/home'><button className={styles.boton}>Entrar</button></Link>
      </div>
    </div>
  );
};
 
export default Landing;