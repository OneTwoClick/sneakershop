import Card from "../components/Card";

function Home(
  {
    items,
    searchValue,
    onChangeSearch,
    onAddToFavorite,
    onAddToCart,
    isLoading
  }) {
    const renderItems = () => {
      const searchFilter = items && items.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()));
      return (isLoading ? [...Array(8)] : searchFilter)
        .map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            {...item}
          />
        ));
    };

    return (
      <div className="content p-40">
        <div className="d-flex align-center mb-20 justify-between">
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : `Все кросовки`}</h1>
          <div className="search">
            <img src="img/search.svg" alt="Search"/>
            <input onChange={onChangeSearch} placeholder="Поиск ... " type="text"/>
          </div>
        </div>
        <div className="list d-flex flex-wrap">
          { renderItems() }
        </div>
      </div>
    )
}

export default Home;