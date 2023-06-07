import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../redux/actions/acctions';
import styles from './SearchBar.module.css';

const SerchBar = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    dispatch(searchByName(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className={styles.containerInput}>
      <input
        className={styles.input}
        type='text'
        placeholder='Buscar'
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SerchBar;






