function Drawer({onClose, items = []}) {
  return(
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-20">
          Корзина <img onClick={onClose} src="/img/delete-off.svg" alt="Close" />
        </h2>

        <div className="cart-items">
          {items.map((obj) => (
            <div className="cart-item d-flex align-center mb-20">
              <img className="mr-20" width="70px" height="70px" src={obj.img} alt="" />
              <div className="mr-20">
                <p className="mb5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img src="/img/delete-off.svg" alt="Delete" />
            </div>
            ))
          }
        </div>

        <div className="cart-total">
          <ul>
            <li>
              <span>Итого:</span>
              <div> </div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div> </div>
              <b>1074 руб.</b>
            </li>
            <button className="green-button">
              Оформить заказ
              <img src="/img/arrow.svg" alt="Next" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Drawer;