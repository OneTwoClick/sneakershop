import Card from "../components/Card";
import React from "react";

function Favorites({items, onAddToCart, onAddToFavorite, isLoading}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-20 justify-between">
        <h1>Мои закладки</h1>
      </div>

      <div className="list d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : items).map((item, index) => (
            <Card
              key={index}
              loading={isLoading}
              onFavorite={(obj, favorite) => onAddToFavorite(obj, favorite)}
              onPlus={(obj) => onAddToCart(obj)}
              thisFavorite = {true}
              {...item}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Favorites;