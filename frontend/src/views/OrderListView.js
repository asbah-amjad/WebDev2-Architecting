import React, { useEffect, useState } from "react";
import {Order} from "../components/Order/Order";
import { mockOrderList } from "../mocks/orders";
import { OrderService } from "../services/OrderService";
import styles from "./OrderListView.module.css";

export const OrderListView = () => {
    const [orders, setOrders] = useState(mockOrderList);
    const currentOrders = orders.filter(({ status }) => !["received", "failed"].includes(status));
    const pastOrders = orders.filter(({ status }) => ["received", "failed"].includes(status));

    /*useEffect(() => {
        OrderService.getListing().then(setOrders);
    }, []);*/

    return (
        <div>
            <h1>Orders</h1>
            <OrderList orders={currentOrders} />
            <h2>Past</h2>
            <OrderList orders={pastOrders}/>
        </div>
    );
};

const OrderList = ({ orders }) => {
    return (
        <div className={styles.OrderList}>
            {orders.map(data => <Order key={data.id} {...data} />)}
        </div>
    );
};
