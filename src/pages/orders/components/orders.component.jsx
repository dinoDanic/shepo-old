import React, { useState } from "react";
import OrderItem from "./order-item.component";

const Orders = () => {
  const [state, setState] = useState([
    {
      orderId: "123",
      created: "10.03.2020",
      deliveryDate: "30.04.2020",
      orderDate: "10.03.2020",
      customer: {
        name: "Bauhaus",
        poslovnica: "Pula",
      },
    },
    {
      orderId: "1235",
      created: "10.03.2020",
      deliveryDate: "30.04.2020",
      orderDate: "10.03.2020",
      customer: {
        name: "Bauhaus",
        poslovnica: "Pula",
      },
    },
    {
      orderId: "1236",
      created: "10.03.2020",
      deliveryDate: "30.04.2020",
      orderDate: "10.03.2020",
      customer: {
        name: "Bauhaus",
        poslovnica: "Pula",
      },
    },
  ]);
  return (
    <div>
      {state.map((order) => (
        <OrderItem order={order} />
      ))}
    </div>
  );
};

export default Orders;
