import styles from "./Sandwich.module.css";

export const Sandwich = ({id, name, toppings, breadType, onOrder}) => {
    return (
        <div className={styles.container}>
            <h2>{name}</h2>
            <p>Bread type: {breadType}</p>
            <ToppingList toppings={toppings}/>
            <button onClick={onOrder} data-sandwich-id={id}>Order</button>
        </div>
    );
};

const ToppingList = ({toppings}) => {
    return (
        <>
            <h3>Toppings</h3>
            <ul>
                {toppings.map(data => <Topping key={data.id} {...data} />)}
            </ul>
        </>
    );
};

const Topping = ({name}) => <li>{name}</li>;
