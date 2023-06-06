import style from './Card.module.css';

const Card = ({ name, image, continent }) => {
  return (
    <div className={style.cardContainer}>
      <img className={style.cardImage} src={image} alt={name} />
      <div className={style.cardContent}>
        <h5>{name}</h5>
        <p>{continent}</p>
      </div>
    </div>
  );
};

export default Card;