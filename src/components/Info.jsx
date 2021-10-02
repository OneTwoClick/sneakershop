import React from "react";
import {AppContext} from "../App";

export const Info = ({img, title, description}) => {
  const {setCartOpen} = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img
        className="md-20"
        width="120"
        height="120"
        src={img}
        alt="Empty"
      />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button className="greenButton" onClick={() => setCartOpen(false)}>
        <img src="img/arrow.svg" alt="Arrow"/>
        Вернуться назад
      </button>
    </div>
  )
}