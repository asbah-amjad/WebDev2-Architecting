import {OrderStatus} from "../../enums";
import styles from "./Order.module.css";

export const Order = ({_id, sandwichId, date, status}) => {
    return (
        <div className={styles.container}>
            <header>
                <h2>NAME NOT DEFINED</h2>
            </header>

            <small>{date}</small>
            <StatusBar status={status}/>
        </div>
    );
};

const successStatuses = Object.values(OrderStatus).filter(status => status !== OrderStatus.FAILED);

const StatusBar = ({status}) => {
    if (status === OrderStatus.FAILED) {
        return <p className={styles.FailedStatus}>{status}</p>;
    }
    return (
        <ul className={styles.StatusBar}>
            {successStatuses.map(successStatus => (
                <li className={successStatus === status ? styles.CurrentStatus : undefined} key={successStatus}>
                    {successStatus}
                </li>
            ))}
        </ul>
    );
};
