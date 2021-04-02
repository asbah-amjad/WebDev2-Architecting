import styles from "./Order.module.css";

export const Order = ({ id, sandwichId, status }) => {
    return (
        <div className={styles.container}>
            <h2>{sandwichId}</h2>
            <small>{status}</small>
        </div>
    );
};
