
import Card from '../Card/Card'
import style from './Cards.module.css';
import { Link } from 'react-router-dom';
const Cards = ({ countries }) => {

  return (
    <div className={style.containerCards}>
      {countries.map((country) => (
         <Link to={`/detail/${country.id}`}>
                 <Card
                    key={country.id}    
                    name={country.name}
                    image={country.imageFlag}
                    continent={country.continent}
             />
         </Link>
       
        
      ))}
    </div>
  );
};

export default Cards;