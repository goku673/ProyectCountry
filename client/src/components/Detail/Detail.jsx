import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardId } from '../../redux/actions/acctions'
import styles from './Detail.module.css';
import Navigation from '../Navigation/Navigation';
const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const country = useSelector((state) => state.countryId);
  useEffect(() => {
    dispatch(cardId(id));
  }, [dispatch, id]);

  
  return (
    <div className={styles.detailContainer}>
      <Navigation />
      <div className={styles.content}>
        <div className={styles.card}>
          <h1>{country.name}</h1>
          <img src={country.imageFlag} alt={`${country.name} flag`} className={styles.flag} />
          <div className={styles.info}>
            <p><strong>Continent:</strong> {country.continent}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Subregion:</strong> {country.subRegion}</p>
            <p><strong>Area:</strong> {country.area}</p>
            <p><strong>Population:</strong> {country.population}</p>
          </div>
        </div>
        <div className={styles.sidebar}>
          <h2>Activities</h2>
          <div className={styles.activities}>
            {country.activities && country.activities.length > 0 ? (
              <ul>
                {country.activities.map((activity) => (
                  <li key={activity.name} className={styles.activityCard}>
                    <h3>{activity.name}</h3>
                    <p><strong>Difficulty:</strong> {activity.difficulty}</p>
                    <p><strong>Duration:</strong> {activity.duration} hours</p>
                    <p><strong>Season:</strong> {activity.season}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No activities yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;