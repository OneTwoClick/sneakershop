import React from "react";
import axios from "axios";
import styles from './Drawer.module.scss'
import {AppContext} from "../../App";
import {Info} from "../Info";

function Drawer({onClose, onRemove, items = []}) {
  const { cartItems, setCartItems } = React.useContext(AppContext)
  const [orderId, setOrderId] = React.useState(null);
  const [isComplite, setIsComplite] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const {data} = await axios.post("https://61506856a706cd00179b7440.mockapi.io/api/items/orders", {
        items: cartItems
      });
      setOrderId(data.id);
      setIsComplite(true);
      setCartItems([]);

      /*for(let i=0; i < cartItems.length; i++){
        await axios.put("https://61506856a706cd00179b7440.mockapi.io/api/items/orders", []);
      }*/
    } catch (e) {
      alert('Ошибка при создании заказа')
    }
    setIsLoading(false);
  }

  return(
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-20">
          Корзина <img onClick={onClose} src="img/delete-off.svg" alt="Close" />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="cart-items flex">
              {items.map((obj) => (
                <div key={obj.id} className="cart-item d-flex align-center mb-20">
                  <img className="mr-20" width="70px" height="70px" src={obj.img} alt="" />
                  <div className="mr-20">
                    <p className="mb5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img onClick={() => onRemove(obj.id)} src="img/delete-off.svg" alt="Delete" />
                </div>
                ))
              }
            </div>

            <div className="cart-total">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div> </div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div> </div>
                  <b>{ totalPrice/100 * 5 } руб.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                Оформить заказ
                <img src="img/arrow.svg" alt="Next" />
              </button>
            </div>
          </div>
          ) : (
          <Info
            title={isComplite ? "Заказ оформлен!" : "Корзина пустая"}
            description={isComplite ? `Ваш заказ #${orderId} оформлен и будет передан курьеру` : "Добавьте хотя бы одну пару кроссовок"}
            img={isComplite ? "img/confirm-cart.jpg" : "img/empty-cart.jpg"}
          />
          )}
      </div>
    </div>
  )
}

export default Drawer;