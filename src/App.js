import Card from  './components/Card'
import Header from './components/Header'
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpen, setCartOpen] = React.useState(false);

  React.useEffect(() => {
    /**fetch("https://61506856a706cd00179b7440.mockapi.io/api/items/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });**/
    axios.get("https://61506856a706cd00179b7440.mockapi.io/api/items/items")
      .then((res) => {setItems(res.data);})
    axios.get("https://61506856a706cd00179b7440.mockapi.io/api/items/cart")
      .then((res) => {setCartItems(res.data);})
  }, []);

  const onAddToFavorite = (obj) => {
    axios.post("https://61506856a706cd00179b7440.mockapi.io/api/items/favorite", obj);
    setFavoriteItems((prev) => [...prev, obj]);
  };

  const onAddToCart = (obj) => {
    axios.post("https://61506856a706cd00179b7440.mockapi.io/api/items/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveOnCart = (id) => {
    axios.delete(`https://61506856a706cd00179b7440.mockapi.io/api/items/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">

      {cartOpen &&
      <Drawer
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={onRemoveOnCart}
      />}
      <Header onOpenCart={() => setCartOpen(true)}/>

      <div className="content p-40">
        <div className="d-flex align-center mb-20 justify-between">
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : `Все кросовки`}</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search"/>
            <input onChange={onChangeSearch} placeholder="Поиск ... " type="text"/>
          </div>
        </div>

        <div className="list d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                img={item.img}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
