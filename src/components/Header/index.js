import {Link} from 'react-router-dom';
import React from "react";
import {AppContext} from "../../App";

function Header(props) {
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img src="/img/logo.svg" className="mr-10" alt="Logo"/>
          <div className="headerInfo" >
            <h3 className="text-uppercase">Yeezy Sneakers</h3>
            <p className="opacity-5">Мазазин редких кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onOpenCart}>
          <img src="/img/cart.svg" alt="Cart"/>
          <span className="">{totalPrice} руб.</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img src="/img/favorite.svg" alt="Favorite"/>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img src="/img/user.svg" alt="User"/>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;