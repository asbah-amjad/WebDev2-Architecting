import {useState} from "react";
import {Button} from "../components/Button/Button";
import {BreadTypes, NotificationLevel} from "../enums";
import {fireNotificationEvent} from "../events/NotificationEvent";
import {SandwichService} from "../services/SandwichService";
import styles from "./SandwichForm.module.css";

export const SandwichForm = () => {
    const [data, setData] = useState({
        name: "",
        toppings: [],
        breadType: "",
        price: ""
    });

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        SandwichService.create(data)
            .then(() => fireNotificationEvent(`Sandwich "${data.name}" added.`))
            .catch(() => fireNotificationEvent("Failed to add sandwich", NotificationLevel.ERROR));
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Name*:
                <input type="text" name="name" value={data.name} onChange={handleChange} required={true}/>
            </label>
            <label>
                Price*:
                <input type="number" name="price" value={data.price} onChange={handleChange} required={true}/>
            </label>
            <ToppingFormElement data={data} setData={setData}/>
            <span>Bread type:</span>
            <div>
                {Object.entries(BreadTypes).map(([_, breadType]) => (
                    <label key={breadType}>
                        <input type="radio" name="breadType" value={breadType} onChange={handleChange}/>
                        {breadType}
                    </label>)
                )}
            </div>
            <Button text="Add Sandwich"/>
        </form>
    );
};

const ToppingFormElement = ({data, setData}) => {
    const handleChange = (event, index) => {
        const toppings = [...data.toppings];
        toppings[index] = { ...toppings[index], name: event.target.value };
        setData({...data, toppings});
    };

    const handleAddTopping = () => {
        setData({
            ...data,
            toppings: data.toppings.concat({name: "", key: new Date().getTime()})
        });
    };

    const handleRemoveTopping = (index) => {
        const toppings = data.toppings.filter((_, i) => i !== index);
        setData({...data, toppings});
    };

    console.log(data);

    return (
        <div>
            <label>Toppings:</label>
            {data.toppings.length > 0 ? (
                <ul>
                    {data.toppings.map((topping, i) => (
                        <li key={topping.key}>
                            <input type="text"
                                   value={topping.name}
                                   name={`topping-${i}`}
                                   onChange={(event) => handleChange(event, i)}/>
                            <button type="button" onClick={() => handleRemoveTopping(i)}>remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No toppings.</p>
            )}
            <button type="button" onClick={handleAddTopping}>add topping</button>
        </div>
    );
};
