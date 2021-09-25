import styles from './Card.module.scss'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/like-off.svg" alt="Unlike"/>
      </div>
      <img width={133} height={112} src={props.img} alt=""/>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button" onClick={() => console.log('Нажали на плюс')}>
          <img src="/img/plus-off.svg" alt="Unlike"/>
        </button>
      </div>
    </div>
  );
}

export default Card;