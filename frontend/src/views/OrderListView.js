import React, { useEffect, useState } from "react";
import {Order} from "../components/Order/Order";
import { OrderService } from "../services/OrderService";
import styles from "./OrderListView.module.css";

export const OrderListView = () => {
    const [orders, setOrders] = useState([]);
    const currentOrders = orders.filter(({ status }) => !["received", "failed"].includes(status));
    const pastOrders = orders.filter(({ status }) => ["received", "failed"].includes(status));

    useEffect(() => {
        OrderService.getListing().then(setOrders).catch(() => console.warn("'GET /order' not integrated."));
    }, []);

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
    if (orders.length === 0) {
        return (<p>No orders found.</p>);
    }

    return (
        <div className={styles.OrderList}>
            {orders.map(data => <Order key={data._id} {...data} />)}
        </div>
    );
};
