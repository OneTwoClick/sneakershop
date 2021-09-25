import Card from  './components/Card'
import Header from './components/Header'
import Drawer from "./components/Drawer";

const listShop = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12990,
    img: '/img/sneakers/1.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12990,
    img: '/img/sneakers/2.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 9499,
    img: '/img/sneakers/3.jpg'
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    img: '/img/sneakers/4.jpg'
  },
  {
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: 15199,
    img: '/img/sneakers/5.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Kyrie 7',
    price: 11299,
    img: '/img/sneakers/6.jpg'
  },
  {
    title: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 10799,
    img: '/img/sneakers/7.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 11499,
    img: '/img/sneakers/8.jpg'
  }
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-20 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск ... " type="text"/>
          </div>
        </div>

        <div className="list d-flex flex-wrap">
          {listShop.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              img={item.img}
            />
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
