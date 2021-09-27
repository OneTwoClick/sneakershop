import styles from './Card.module.scss'
import React from "react";

function Card({title, price, img, onFavorite, onPlus}) {
  const [isAdd, setIsAdd] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, price, img});
    setIsAdd(!isAdd);
  }

  const onClickFavorite =() => {
    onFavorite({title, price, img});
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "/img/like-on.svg" : "/img/like-off.svg"} alt="Unlike"/>
      </div>
      <img width={133} height={112} src={img} alt={title}/>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price} руб.</b>
        </div>
        <button className="button" onClick={onClickPlus}>
          <img src={isAdd ? "/img/plus-on.svg" : "/img/plus-off.svg"} alt="Unlike"/>
        </button>
      </div>
    </div>
  );
}

export default Card;