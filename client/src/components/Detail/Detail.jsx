import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {cardId} from '../../redux/actions/acctions'
import styles from './Detail.module.css';

const Detail = () => {
  const {id} = useParams();
  console.log(id)
  const dispatch = useDispatch();

  const country = useSelector((state)=>state.countryId);
  useEffect(()=>{
    dispatch(cardId(id));
  },[dispatch,id]);

  console.log(country)
  console.log(country.activities)
  return (
    <div className={styles.detailContainer}>
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
    </div>
  )
}

export default Detail;