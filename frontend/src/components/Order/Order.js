import styles from "./Order.module.css";

export const Order = ({ id, sandwichId, status }) => {
    return (
        <div className={styles.container}>
            <h2>NAME NOT DEFINED</h2>
            <small>TIMESTAMP NOT DEFINED</small>
            <StatusBar status={status} />
        </div>
    );
};

const successStatuses = ["ordered", "inQueue", "ready", "received"];

const StatusBar = ({ status }) => {
    if (status === "failed") {
        return <small className={styles.FailStatus}>{status}</small>;
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
