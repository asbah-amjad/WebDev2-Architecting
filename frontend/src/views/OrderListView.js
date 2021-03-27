import React, { useEffect, useState } from "react";
import { mockOrderList } from "../mocks/orders";
import { OrderService } from "../services/OrderService";


export const OrderListView = () => {
    const [orders, setOrders] = useState(mockOrderList);

    /*useEffect(() => {
        OrderService.getListing().then(setOrders);
    }, []);*/

    return <p><h1>Orders</h1>{JSON.stringify(orders)}</p>;
};
