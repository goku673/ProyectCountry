import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../redux/actions/acctions';

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
    <div>
      <input
        type='text'
        placeholder='Buscar'
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SerchBar;






