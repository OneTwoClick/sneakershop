import Card from "../components/Card";
import React from "react";
import axios from "axios";

function Orders() {
  const [orderItems, setOrderItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      try{
        const ordersResponce = await axios.get("https://61506856a706cd00179b7440.mockapi.io/api/items/orders");
        setOrderItems(ordersResponce.data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (e) {
        alert('Ошибка при запросе заказов!');
      }
    }
    fetchData();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-20 justify-between">
        <h1>Мои заказы</h1>
      </div>

      <div className="list d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orderItems).map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            {...item}
          />
        ))
        }
      </div>
    </div>
  )
}

export default Orders;