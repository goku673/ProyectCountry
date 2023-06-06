import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createActivity } from '../../redux/actions/acctions';
import { useSelector } from 'react-redux';
import styles from './Form.module.css';

const FormActivity = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const [formData, setFormData] = useState({
    name: '',
    difficulty: '',
    duration: 0,
    season: '',
    pais: [],
  });

  const seasons = ['spring', 'winter', 'summer', 'autumn'];

  const getCountriesIdOptions = () => {
    return allCountries.map((pais) => (
      <option key={pais.id} value={pais.id}>
        {pais.name}
      </option>
    ));
  };

  const getDurationOptions = (ini, fin) => {
    return Array.from({ length: fin - ini + 1 }, (_, index) => (
      <option key={ini + index} value={ini + index}>
        {ini + index}
      </option>
    ));
  };

  const handleSumit = (event) => {
    event.preventDefault();
    dispatch(createActivity(formData));
  };

  const handleChance = (event) => {
    if (event.target.name === 'pais') {
      const newValue = event.target.value;
      if (!formData.pais.includes(newValue)) {
        setFormData({
          ...formData,
          pais: [...formData.pais, newValue],
        });
      }
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.name === 'duration' ? +event.target.value : event.target.value,
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSumit}>
      <h2 className={styles.title}>Create a new activity</h2>
      <div className={styles.field}>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' value={formData.name} onChange={handleChance} placeholder='Enter name' />
      </div>
      <div className={styles.field}>
        <label htmlFor='difficult'>Difficulty:</label>
        <input type='range' name='difficulty' min='1' max='5' value={formData.difficulty} onChange={handleChance} />
      </div>
      <div className={styles.field}>
        <label htmlFor='duration'>Duration:</label>
        <select name='duration' value={formData.duration} onChange={handleChance}>
          {getDurationOptions(1, 24)}
        </select>
      </div>
      <div className={styles.field}>
        <p>Select a season:</p>
        <select name='season' value={formData.season} onChange={handleChance}>
          {seasons.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor='pais'>Pais:</label>
        <select name='pais' value={formData.pais} onChange={handleChance} multiple>
          {getCountriesIdOptions()}
        </select>
      </div>
      <div className={styles.selectedCountries}>
        {formData.pais.map((pais) => (
          <div key={pais} className={styles.selectedCountry}>
            {allCountries.find((c) => c.id === pais).name}
            <button
              onClick={() => {
                setFormData({
                  ...formData,
                  pais: formData.pais.filter((p) => p !== pais),
                });
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <button className={styles.button} type='submit'>
        Create
      </button>
    </form>
  );
};

export default FormActivity;