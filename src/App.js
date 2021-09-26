import Card from  './components/Card'
import Header from './components/Header'
import Drawer from "./components/Drawer";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpen, setCartOpen] = React.useState(false);

  React.useEffect(() => {
    fetch("https://61506856a706cd00179b7440.mockapi.io/api/items/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">

      {cartOpen && <Drawer items={cartItems} onClose={() => setCartOpen(false)}/>}
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
                onFavorite={() => console.log('321312')}
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
