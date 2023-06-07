
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries, changePage,filterCountries,getActivity} from '../../redux/actions/acctions';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import SerchBar from '../SerchBar/SerchBar';
import Cards from '../CardsCountry/Cards';

const Home = () => {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);

  const copyCountries = useSelector((state) => state.copyCountries);
  const allCountriesByName = useSelector((state) => state.getCountriesByName);
  const countriesPerPage = useSelector((state) => state.pagination.countriePerPage);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const activities  = useSelector((state) => state.activities);
  const [orderBy, setOrderBy] = useState('');
  const [continent, setContinent] = useState('');
  const [nameActivity, setNameActivity] =useState('');

  useEffect(() => {
    dispatch(getActivity());
    dispatch(getCountries());
  }, [dispatch]);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOffFirsCountry = indexOfLastCountry - countriesPerPage;
  const countries =
    allCountriesByName.length < 240
      ? allCountriesByName.slice(indexOffFirsCountry, indexOfLastCountry)
      
      : allCountries.slice(indexOffFirsCountry, indexOfLastCountry);

      useEffect(()=>{
        filterCountry();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [orderBy, continent, nameActivity, copyCountries]);

  const filterCountry = ()=>{
     let copyFilterCountries = [...copyCountries];
     if(continent !=='') copyFilterCountries = copyFilterCountries.filter((pais)=>pais.continent ===continent);
     if(nameActivity !=='') copyFilterCountries = copyFilterCountries.filter((pais)=>pais.activities.find((act)=>act.name === nameActivity));

     if (orderBy === 'name-asc') {
      copyFilterCountries = copyFilterCountries.slice().sort((a, b) => a.name.localeCompare(b.name), 'es', { sensitivity: 'base' });
    } else if (orderBy === 'name-des') {
      copyFilterCountries = copyFilterCountries.slice().sort((a, b) => b.name.localeCompare(a.name), 'es', { sensitivity: 'base' });
    } else if (orderBy === 'population-asc') {
      copyFilterCountries = copyFilterCountries.slice().sort((a, b) => a.population - b.population);
    } else if (orderBy === 'population-des') {
      copyFilterCountries = copyFilterCountries.slice().sort((a, b) => b.population - a.population);
    } else {
      copyFilterCountries = copyFilterCountries.slice();
    }

    dispatch(filterCountries(copyFilterCountries));
  }


  const handlePrevPage = () => {
    dispatch(changePage(currentPage - 1));
  };

  const handleNextPage = () => {
    dispatch(changePage(currentPage + 1));
  };
 
  const handleOrderChange = (e) => {
    const order = e.target.value;
    setOrderBy(order);
  };

  const handleContinentChange = (e) => {
    const continent = e.target.value;
    setContinent(continent);
   
  };

  return (
    <div className={styles.container}>
      <div className={styles.barraNav}>
      
        <SerchBar />
        <select value={orderBy} onChange={handleOrderChange} className={styles.select}>
          <option value=''>sort by...</option>
          <option value='name-asc'>A-Z</option>
          <option value='name-des'>Z-A</option>
          <option value='population-asc'>Menor población</option>
          <option value='population-des'>Mayor población</option>
        </select>
        <select value={continent} onChange={handleContinentChange} className={styles.select}>
          <option value=''>Filter by continent...</option>
          <option value='Asia'>Asiáticos</option>
          <option value='Americas'>Americanos</option>
          <option value='Polar'>Polares</option>
          <option value='Oceania'>Oceánicos</option>
          <option value='Europe'>Europeos</option>
          <option value='Africa'>Africanos</option>
        </select>
        <select value={nameActivity} onChange={(event)=> setNameActivity(event.target.value)}>
          <option value=''>Filter by activities</option>
          {
            activities?.map((act,index)=>{
               return (
                <option  key={index}value={act.name}>
                   {act.name}
                </option>

               );
            })
          }   
        </select> 
        <Link to='/createActivity'>
          <button className={styles.button}>Create Activity</button>
        </Link>
      </div>
      <Cards countries={countries} />
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          back
        </button>
        <p className={styles.currentPage}>
          Página {currentPage} de {Math.ceil(allCountries.length / countriesPerPage)}
        </p>
        <button onClick={handleNextPage} disabled={indexOfLastCountry >= allCountries.length}>
          next
        </button>
      </div>
    </div>
  );
};

export default Home;