import { Button } from "../Button/Button";
import styles from "./Sandwich.module.css";

export const Sandwich = ({id, name, toppings, breadType, onOrder}) => {
    return (
        <div className={styles.container}>
            <h2>{name}</h2>
            <p>Bread type: {breadType}</p>
            <hr />
            <ToppingList toppings={toppings}/>
            <Button onClick={onOrder} data-sandwich-id={id} text="Order" className={styles.OrderButton}/>
        </div>
    );
};

const ToppingList = ({toppings}) => {
    return (
        <ul className={styles.ToppingList}>
            {toppings.map(data => <Topping key={data.id} {...data} />)}
        </ul>
    );
};

const Topping = ({name}) => <li>{name}</li>;
