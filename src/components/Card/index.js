import styles from './Card.module.scss'
import React from "react";
import ContentLoader from "react-content-loader"
import {AppContext} from "../../App";

function Card(
  {
    id,
    title,
    price,
    img,
    loading,
    onFavorite,
    onPlus
  }) {

  const {isItemAdded, isItemFavorite} = React.useContext(AppContext)
  const obj = {id, parentId: Number(id), title, img, price}

  const onClickPlus = () => {
    onPlus(obj);
  }

  const onClickFavorite =() => {
    onFavorite(obj);
  }

  return (
    <div className={styles.card}>
      {
        loading ? <ContentLoader
          speed={2}
          width="100%"
          height={230}
          viewBox="0 0 auto 240"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="100%" height="135" />
          <rect x="0" y="150" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="170" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="210" rx="5" ry="5" width="80" height="20" />
          <rect x="155" y="200" rx="5" ry="5" width="30" height="30" />
        </ContentLoader> :
          <div>
            {onFavorite && (<div className={styles.favorite} onClick={onClickFavorite}>
              <img src={isItemFavorite(id) ? "/img/like-on.svg" : "/img/like-off.svg"} alt="Unlike"/>
            </div>)}
            <img width="100%" height={135} src={img} alt={title}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>{price} руб.</b>
              </div>
              {onPlus && (<button className="button" onClick={onClickPlus}>
                <img src={isItemAdded(id) ? "/img/plus-on.svg" : "/img/plus-off.svg"} alt="Unlike"/>
              </button>)}
            </div>
          </div>
      }
    </div>
  );
}

export default Card;