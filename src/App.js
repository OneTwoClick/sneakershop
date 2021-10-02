import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import Drawer from "./components/Drawer";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpen, setCartOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponce, cartResponce, favoriteResponce] = await Promise.all([
            axios.get("https://61506856a706cd00179b7440.mockapi.io/api/items/items"),
            axios.get("https://61506856a706cd00179b7440.mockapi.io/api/items/cart"),
            axios.get("https://61506856a706cd00179b7440.mockapi.io/api/items/favorite")
          ]);
        setIsLoading(false);
        setCartItems(cartResponce.data);
        setFavoriteItems(favoriteResponce.data);
        setItems(itemsResponce.data);
      } catch (e) {
        alert('Ошибка при запросе данных!')
      }
    }

    fetchData();
  }, []);

  const onAddToFavorite = async (obj, favorite) => {
    if (favorite){
      setFavoriteItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      await axios.delete(`https://61506856a706cd00179b7440.mockapi.io/api/items/favorite/${obj.id}`);
    } else {
      const findItem = favoriteItems.find((item) => Number(item.parentId) === Number(obj.id));

      try {
        if(findItem) {
          setFavoriteItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
          await axios.delete(`https://61506856a706cd00179b7440.mockapi.io/api/items/favorite/${findItem.id}`);
        } else {
          setFavoriteItems((prev) => [...prev, obj]);
          const { data } = await axios.post("https://61506856a706cd00179b7440.mockapi.io/api/items/favorite", obj);
          setFavoriteItems((prev) => prev.map(item => {
            if (Number(item.parentId) === Number(data.parentId)) {
              return {
                ...item,
                id: data.id
              }
            }
            return item;
          }));
        }
      } catch (error) {
        alert('Не удалось добавить в закладки')
      }
    }
  };

  const onAddToCart = async (obj) => {
    const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
    try {
      if(findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
        axios.delete(`https://61506856a706cd00179b7440.mockapi.io/api/items/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } =  await axios.post("https://61506856a706cd00179b7440.mockapi.io/api/items/cart", obj);
        setCartItems((prev) => prev.map(item => {
          if (Number(item.parentId) === Number(data.parentId)){
            return {
              ...item,
              id: data.id
            }
          }
          return item;
        }));
      }
    } catch (error) {
      alert('Не удалось добавить товар в корзину')
    }
  };

  const onRemoveOnCart = (id) => {
    axios.delete(`https://61506856a706cd00179b7440.mockapi.io/api/items/cart/${id}`);
    setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
  }

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  const isItemFavorite = (id) => {
    console.log(favoriteItems + "ID " + id);
    return favoriteItems.some((obj) => Number(obj.parentId) === Number(id));
  }

  return (
    <AppContext.Provider value={{items, cartItems, favoriteItems, isItemAdded, isItemFavorite, setCartOpen, setCartItems}}>
      <div className="wrapper clear">

        {cartOpen &&
        <Drawer
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={onRemoveOnCart}
        />}

        <Header
          onOpenCart={() => setCartOpen(true)}
        />

        <Route path="" exact>
          <Home
            items={items}
            searchValue={searchValue}
            onChangeSearch={onChangeSearch}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites
            items={favoriteItems}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/orders" exact>
          <Orders
          />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
