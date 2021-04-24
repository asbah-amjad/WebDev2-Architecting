import {OrderStatus} from "../../enums";
import styles from "./Order.module.css";

export const Order = ({ _id, sandwichId, date, status }) => {
    return (
        <div className={styles.container}>
            <h2>NAME NOT DEFINED</h2>
            <small>{date}</small>
            <StatusBar status={status} />
        </div>
    );
};

const successStatuses = Object.values(OrderStatus);

const StatusBar = ({ status }) => {
    if (status === "failed") {
        return <p className={styles.FailedStatus}>{status}</p>;
    }
    return (
        <ul className={styles.StatusBar}>
            {successStatuses.map(successStatus => (
                <li className={successStatus === status ? styles.CurrentStatus : undefined}>
                    {successStatus}
                </li>
            ))}
        </ul>
    );
};
