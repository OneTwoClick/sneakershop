function Drawer() {
  return(
    <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-20">
          Корзина <img src="/img/delete-off.svg" />
        </h2>

        <div className="cart-items">
          <div className="cart-item d-flex align-center mb-20">
            <img className="mr-20" width="70px" height="70px" src="/img/sneakers/1.jpg" alt="" />
            <div className="mr-20">
              <p className="mb5">Мужские кросовки Nike Air Max</p>
              <b>12 999 руб.</b>
            </div>
            <img src="/img/delete-off.svg" />
          </div>

          <div className="cart-item d-flex align-center">
            <img className="mr-20" width="70px" height="70px" src="/img/sneakers/3.jpg" alt="" />
            <div className="mr-20">
              <p className="mb5">Мужские кросовки Nike Air Yeezy 320</p>
              <b>12 999 руб.</b>
            </div>
            <img src="/img/delete-off.svg" />
          </div>
        </div>

        <div className="cart-total">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
            <button className="green-button">
              Оформить заказ
              <img src="/img/arrow.svg" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Drawer;